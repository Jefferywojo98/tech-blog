const { User } = require('../models');

const userData = [{
        username: 'Jeffery',
        password: 'jeff21'

    }
    
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;