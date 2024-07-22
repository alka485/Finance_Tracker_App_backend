const express = require('express');
const db = require('./config/connection');
const PORT = process.env.PORT || 3008;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Welcome")
})


db.once('open' , () => {
    app.listen(PORT, () => {
        console.log(`Server is running : ${PORT}`);
    })
})


