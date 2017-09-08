const faker = require('faker');

class UsersNodeSeeder {

    constructor(firebase) {
        this.firebase = firebase;
    }
    model() {
        return {
            uid: faker.random.uuid(),
            emailAddress: faker.internet.email(),
            displayName: `${faker.name.firstName()} ${faker.name.lastName()}`,
            createdAt: this.firebase.database.ServerValue.TIMESTAMP,
            updatedAt: this.firebase.database.ServerValue.TIMESTAMP
        }
    }

    generate(numberOfUsers) {
        const users = this.firebase.database().ref('/users');
        for (let number = 0; number <= numberOfUsers; number++) {
            users.push(this.model())
        }
        console.log('Done seeding users')
    }
}

module.exports = UsersNodeSeeder;
