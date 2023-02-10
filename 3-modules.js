// Modules -- Encapsulated Code (only share minimum)

const name = require('./4-names.js')
const sayHi = require('./5-util')
const data = require('./6-alternative-flavor') 
require('./7-mind-grenade')

sayHi('Susan');
sayHi('Emma');
sayHi(name.john);
sayHi(name.peter);