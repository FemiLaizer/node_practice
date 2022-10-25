// CommonJs - every file is module (by default)
// Module - Encapsulated Code, (only share minimum)

const names = require("./4-names")
const sayHi = require("./5-function")
const flavour = require("./6-alternative-flavour")
require("./7-mind-grenade")

sayHi("Akorede")
sayHi(names.ronke)
sayHi(names.femi)