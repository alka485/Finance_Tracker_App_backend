const { log } = require('console');
const {connect , connection } = require ('mongoose');

const connectionString = 
process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/financeTracker';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

console.log('db connected');

module.exports = connection;