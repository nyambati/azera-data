const faker = require('faker');

class CategoriesNodeSeeder {
    constructor(firebase) {
        this.firebase = firebase;
    }
    random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    model() {
        const categories = ['TeenCode', 'FIR', 'DIR']
        return {
            name: categories[this.random(0, 2)],
            createdAt: this.firebase.database.ServerValue.TIMESTAMP,
            updateAt: this.firebase.database.ServerValue.TIMESTAMP
        }
    }

    generate() {
        const categories = this.firebase.database().ref('categories');
        categories.remove();
        for (let number = 0; number <= 2; number++) {
            categories.push(this.model());
        }
        console.log('Done seeding categories');
    }
}

module.exports = CategoriesNodeSeeder;
