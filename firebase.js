const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyAGWB2FtZgiIXoJEug1wpMjhZltp-c8YCk",
    authDomain: "reciept-ab78c.firebaseapp.com",
    databaseURL: "https://reciept-ab78c.firebaseio.com",
    projectId: "reciept-ab78c",
    storageBucket: "reciept-ab78c.appspot.com",
    messagingSenderId: "10851087050"
}

firebase.initializeApp(config);

module.exports = firebase;
