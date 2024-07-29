const connection = require('../config/connection');

const {Income , Expense} = require('../models');

//console.log(Expense);

const {getRandomExpense} = require('./data');
const {getRandomIncome}  = require('./data');



connection.on('error' , (err) => err);

connection.once('open' , async() => {
    console.log('connected');
    
    //clear existing data
    await Expense.deleteMany({});
    await Income.deleteMany({});
    
    //generate random expense
    const  expense = getRandomExpense(5);
    const income = getRandomIncome(5);
    
    //Insert the expense into the db
    await Expense.insertMany(expense);
    await Income.insertMany(income);
    

    console.log(expense);
    console.log(income);
    
    console.info('Seeding completed');
     process.exit(0);
})