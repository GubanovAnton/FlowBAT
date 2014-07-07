UI.registerHelper("share", ->
  share
)

UI.registerHelper("Router", ->
  Router
)

UI.registerHelper("Session", (key) ->
  Session.get(key)
)

UI.registerHelper("condition", (v1, operator, v2, options) ->
  switch operator
    when "==", "eq", "is"
      v1 is v2
    when "!=", "neq", "isnt"
      v1 isnt v2
    when "===", "ideq"
      v1 is v2
    when "!==", "nideq"
      v1 isnt v2
    when "&&", "and"
      v1 and v2
    when "||", "or"
      v1 or v2
    when "<", "lt"
      v1 < v2
    when "<=", "lte"
      v1 <= v2
    when ">", "gt"
      v1 > v2
    when ">=", "gte"
      v1 >= v2
    else
      throw "Undefined operator \"" + operator + "\""
)

UI.registerHelper "not", (value, options) ->
  not value

UI.registerHelper "t", (key, hash) ->
  params = {} #default
  params = hash.hash  if hash
  result = i18n.t(key, params)
  new Spacebars.SafeString(result)

UI.registerHelper("tds", (duration, options) ->
  if @
    "<td>" + @.join("</td><td>") + "</td>"
)

UI.registerHelper "cl", (v) ->
  cl v
