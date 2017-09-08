const firebase = require('./firebase');
const User = require('./User');


let user = new User(firebase);

user.generate(2);
