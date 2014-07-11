share = share or {}

#share.combine = (funcs...) ->
#  (args...) =>
#    for func in funcs
#      func.apply(@, args)

share.user = (fields, userId = Meteor.userId()) ->
  Meteor.users.findOne(userId, {fields: fields})

share.intval = (value) ->
  parseInt(value, 10) || 0

share.minute = 60 * 1000
share.hour = 60 * share.minute

share.rwcutFields = [
  "sIP"
  "dIP"
  "sPort"
  "dPort"
  "protocol"
  "packets"
  "bytes"
  "flags"
  "sTime"
  "duration"
  "eTime"
  "sensor"
  "class"
  "type"
  "iType"
  "iCode"
]

share.parseResult = (result) ->
  rows = []
  for row in result.split("\n")
    rows.push(row.split("|"))
  rows

share.stringBuilderFields = [
  "startDateEnabled"
  "startDate"
  "endDateEnabled"
  "endDate"
  "sensorEnabled"
  "sensor"
  "typeEnabled"
  "type"
  "additionalParametersEnabled"
  "additionalParameters"
]
share.buildQueryString = (query) ->
  parameters = []
  if query.startDateEnabled and query.startDate
    parameters.push("--start-date=" + query.startDate)
  if query.endDateEnabled and query.endDate
    parameters.push("--end-date=" + query.endDate)
  if query.sensorEnabled and query.sensor
    parameters.push("--sensor=" + query.sensor)
  if query.typeEnabled and query.type
    parameters.push("--type=" + query.type)
  if query.additionalParametersEnabled and query.additionalParameters
    parameters.push(query.additionalParameters)
  parameters.join(" ")

share.isDebug = Meteor.settings.public.isDebug

object = if typeof(window) != "undefined" then window else GLOBAL
object.isDebug = share.isDebug
if typeof(console) != "undefined" && console.log && _.isFunction(console.log)
  object.cl = _.bind(console.log, console)
else
  object.cl = ->
