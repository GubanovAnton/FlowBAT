Router.configure
  layoutTemplate: "layout"
  notFoundTemplate: "notFound"
  loadingTemplate: "loading"
  yieldTemplates:
    navbar: {to: "header"}
    footer: {to: "footer"}

Router.setTemplateNameConverter (str) -> str

Router.onBeforeAction(() ->
  if not Meteor.user()
    config = share.Configs.findOne()
    if config and not config.isSetupComplete
      @render("setupAdminAccount")
    else
      @render("welcome")
  else
    @next()
, {except: []})

Router.onBeforeAction(() ->
  config = share.Configs.findOne()
  if config and not config.isSetupComplete
    @render("setupConfig")
  else
    @next()
, except: ["setup"])

Router.onBeforeAction("dataNotFound")

Router.map ->
  @route "dashboard",
    path: "/"
    data: -> {}
  @route "createQuery",
    path: "/query/create/:isQuick?"
    data: -> {}
    action: ->
      _id = share.Queries.insert({
        isQuick: not not @params.isQuick
      })
      Router.go("/query/" + _id)
  @route "queryList",
    path: "/query/list"
    data: -> {}
  @route "query",
    path: "/query/:_id"
    data: ->
      query = share.Queries.findOne(@params._id)
      if not query
        return null
      _.defaults({}, @params,
        queryObject: query
      )
    onStop: ->
      if data?.queryObject?.isQuick
        share.Queries.remove(data.queryObject._id)
  @route "removeQuery",
    path: "/query/:_id/remove"
    data: -> {}
    action: ->
      share.Queries.remove(@params._id)
      Router.go("/")
  @route "createIPSet",
    path: "/ipset/create"
    template: "ipsetCreate"
    data: ->
      ipset:
        _id: "NEW"
        isNew: true
  @route "ipsetList",
    path: "/ipset/list"
    data: -> {}
  @route "ipset",
    path: "/ipset/:_id"
    data: ->
      ipset = share.IPSets.findOne(@params._id)
      if not ipset
        return null
      _.defaults({}, @params,
        ipset: ipset
      )
  @route "removeIPSet",
    path: "/ipset/:_id/remove"
    data: -> {}
    action: ->
      share.IPSets.remove(@params._id)
      Router.go("/")
  @route "createTuple",
    path: "/tuple/create"
    template: "tupleCreate"
    data: ->
      tuple:
        _id: "NEW"
        isNew: true
  @route "tupleList",
    path: "/tuple/list"
    data: -> {}
  @route "tuple",
    path: "/tuple/:_id"
    data: ->
      tuple = share.Tuples.findOne(@params._id)
      if not tuple
        return null
      _.defaults({}, @params,
        tuple: tuple
      )
  @route "removeTuple",
    path: "/tuple/:_id/remove"
    data: -> {}
    action: ->
      share.Tuples.remove(@params._id)
      Router.go("/")
  @route "config",
    data: ->
      unless share.Security.currentUserHasRole("admin")
        return null
      _.defaults({}, @params,
        config: share.Configs.findOne({}, {sort: {createdAt: 1}})
      )
  @route "help",
    data: -> {}
  @route "users",
    data: ->
      unless share.Security.currentUserHasRole("admin")
        return null
      _.defaults({}, @params,
        users: Meteor.users.find({}, {sort: {createdAt: 1}})
      )
  @route "newUser",
    path: "users/new"
    data: ->
      unless share.Security.currentUserHasRole("admin")
        return null
      _.defaults({}, @params)
  @route "user",
    path: "/users/:_id"
    data: ->
      user = Meteor.users.findOne(@params._id)
      unless user and share.Security.currentUserHasRole("admin")
        return null
      _.defaults({}, @params,
        user: user
      )
  @route "profile",
    data: ->
      _.defaults({}, @params,
        user: Meteor.user()
      )
  @route "setup",
    path: "/setup"
    data: -> {}
    action: ->
      if Meteor.users.findOne()
        @render("config")

Router.onBeforeAction () ->
  if Accounts._resetPasswordToken
    UI.insert(UI.renderWithData(Template.alert,
      name: i18n.t("forms.login.passwordReset.alert.name")
      descriptionTemplateName: "resetPasswordAlertDescription"
      descriptionTemplateData: {}
      buttonPanelTemplateName: "resetPasswordAlertButtonsPanel"
      buttonPanelTemplateData: {token: Accounts._resetPasswordToken}
    ), document.body)
    delete Accounts._resetPasswordToken
  @next()

share.setPageTitle = (title, appendSiteName = true) ->
  if appendSiteName
    title += " - FlowBAT"
  if Meteor.settings.public.isDebug
    title = "(D) " + title
  document.title = title
