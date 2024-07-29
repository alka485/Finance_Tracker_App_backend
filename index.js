const express = require('express');
const cors = require('cors');
const db = require('./config/connection');
const PORT = process.env.PORT || 3008;
const routes = require('./routes')
const dotenv = require('./dotenv');

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("Welcome")
})

app.use(routes);

db.once('open' , () => {
    app.listen(PORT, () => {
        console.log(`Server is running : ${PORT}`);
    })
})


