const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})

//Connection

const mongoURI = "mongodb+srv://ronm250304:RoN13141516@cluster0.xn5xe.mongodb.net/"
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected successfilly")
}).catch((error) => {
    console.log("MongoDB connection error", error)
})