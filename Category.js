const faker = require('faker');

class CategoriesNodeSeeder {
    constructor(firebase) {
        this.firebase = firebase;
    }

    model() {
        return {
            name: faker.lorem.word(),
            createdAt: this.firebase.database.ServerValue.TIMESTAMP,
            updateAt: this.firebase.database.ServerValue.TIMESTAMP
        }
    }

    generate(numberOfCategories) {
        const categories = this.firebase.database().ref('/categories');
        for (let number = 0; number <= numberOfCategories; number++) {
            categories.push(this.model());
        }
        console.log('Done seeding categories');
    }
}

module.exports = CategoriesNodeSeeder;
