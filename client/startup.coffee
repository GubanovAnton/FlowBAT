Session.set("now", new Date())
setInterval(->
  Session.set("now", new Date())
, 1000)

Meteor.startup ->
  userId = Meteor.userId()
  if Meteor.settings.public.isDebug
    if not userId and (location.host == "localhost:3000" or location.host.indexOf("192.168") != -1)
      if jQuery.browser.webkit
        Meteor.loginWithToken("ChrisSanders")
      if jQuery.browser.mozilla
        Meteor.loginWithToken("DenisGorbachev")
