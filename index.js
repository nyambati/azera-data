const User = require('./User');
const Category = require('./Category');
const Reciept = require('./Reciept');
const firebase = require('./firebase');
const { dataConfig } = require('./config');

// Generate users
console.log('==================== Start seeders for the Azera App ===================')
const users = new User(firebase);

users.generate(dataConfig.users)

//Generate Catagories

const catagories = new Category(firebase);

catagories.generate();

// Generate reciepts
const reciepts = new Reciept(firebase);

reciepts.generate(dataConfig.reciepts);

