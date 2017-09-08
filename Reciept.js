const faker = require('faker');
class RecieptsNodeSeeder {
    constructor(firebase) {
        this.firebase = firebase;
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    model(user_id, category) {
        const status = ['pending', 'accepted', 'rejected']
        return {
            imageUrl: faker.image.imageUrl(),
            category,
            user_id,
            tags: `#${faker.lorem.word()}`,
            stagus: status[this.random(0, 2)],
            createdAt: this.firebase.database.ServerValue.TIMESTAMP,
            updatedAt: this.firebase.database.ServerValue.TIMESTAMP
        }
    }

    generate(numberOfReciepts) {
        const categories = ['TeenCode', 'FIR', 'DIR']
        const users = this.firebase.database().ref('/users');
        const reciepts = this.firebase.database().ref('/reciepts')
        reciepts.remove();
        users.once('value').then(snap => {
            let usersArray = [];
            let users = snap.val()
            for (let index in users) {
                usersArray.push(users[index].uid);
            }
            let number;
            for (number = 0; number <= numberOfReciepts; number++) {
                let cat = categories[this.random(0, 2)];
                let user_id = usersArray[this.random(0, usersArray.length - 1)];
                reciepts.push(this.model(user_id, cat));
            }

            if (number === numberOfReciepts + 1) {
                console.log('Done generating Reciepts');
                setTimeout(() => process.exit(), 4000);
            }
        })
            .catch(error => console.log(error));
    }
}

module.exports = RecieptsNodeSeeder;
