require('dotenv').config(); 

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dotenv =require("dotenv");
const {connectDatabase,getConnection} = require('./database');
const { get } = require('mongoose');

app.use(express.json());
app.get('/ping', (req, res) => {
    res.send('Pong!');
});

connectDatabase();

app.get("/", (req, res) => {
    console.log('Connected');
    res.json({ message: getConnection() });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});