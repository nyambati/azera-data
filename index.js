const User = require('./generators/User');
const Category = require('./generators/Category');
const Reciept = require('./generators/Receipt');
const firebase = require('./generators/firebase');
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
