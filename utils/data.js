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
    'payment for freelance project',
    'car servicing',
    'monthly streaming service',
    'monthly gym membership'
]

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
}

module.exports = {getRandomExpense};



