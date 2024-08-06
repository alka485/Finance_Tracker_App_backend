const dotenv = require('dotenv')
const {connect , connection } = require ('mongoose');

dotenv.config()

console.log(process.env.MONGO_URI);

const connectionString = process.env.MONGO_URI ;

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

console.log('db connected');

module.exports = connection;