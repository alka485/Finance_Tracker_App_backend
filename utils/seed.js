const connection = require('../config/connection');

const {Income , Expense} = require('../models');

const {getRandomExpense} = require('./data');


connection.on('error' , (err) => err);

connection.once('open' , async() => {
    console.log('connected');
    //clear existing data
    await Expense.deleteMany({});
    //generate random expense
    const  expense = getRandomExpense(5);
    //Insert the expense into the db
    await Expense.insertMany(expense);

    console.log(expense);
    console.info('Seeding completed');
    process.exit(0);
})