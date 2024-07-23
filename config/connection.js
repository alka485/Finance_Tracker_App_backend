
const {connect , connection } = require ('mongoose');

const connectionString = 
process.env.MONGODB_URI || 'mongodb://localhost:27017/financeTracker';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

console.log('db connected');

module.exports = connection;