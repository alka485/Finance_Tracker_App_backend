const title = [
    'Grocery Shopping',
    'Salary',
    'Electricity Bill',
    'Internet Bill',
    'Rent',
    'Dining Out',
    'Freelance Project',
    'Car Maintenance',
    'Subscription',
    'Gym Membership',
]

const category = [
    'food',
    'income',
    'utilities',
    'housing',
    'transportation',
    'entertainment',
    'health'
]

const description = [
    'weekly groceries',
    'monthly salary',
    'monthly internet bill',
    'monthly rent',
    'dinner at restaurent',
    'freelance project',
    'car servicing',
    'monthly streaming service',
    'monthly gym membership'
]

const email = [
    'john.doe@example.com',
    'jane.smith@example.com',
    'alice.johnson@example.com',
    'bob.brown@example.com',
    'mishra.ravi@example.com'
]

// const password =[
//     'password123',
//     'test123',
//     'password12345',
//     'password12',
//     'test1234'
// ]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

//Get random Expense
const getRandomExpense =(int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            title: getRandomArrItem(title),
            amount: (Math.random() * 100).toFixed(2),
            type: 'expense',
            date: new Date(),
            category: getRandomArrItem(category),
            description: getRandomArrItem(description),
        })
    }
    return results;
}

const getRandomIncome =(int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            title: getRandomArrItem(title),
            amount: (Math.random() * 100).toFixed(2),
            type: 'income',
            date: new Date(),
            category: getRandomArrItem(category),
            description: getRandomArrItem(description),
        })
    }
    return results;
}

const getRandomUser = (int)=>{
    let results = [];
    for(let i = 0; i < int ; i++) {
        results.push({
            email : getRandomArrItem(email),
            password : "password123"
        })
    }
    return results;
}




module.exports = {getRandomExpense , getRandomIncome};



