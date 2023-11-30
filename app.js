import express from "express";
import testMiddleware from "./middleware/test.middleware.js";
import tasks from "./routes/tasks.js";
import users from "./routes/users.js";

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(testMiddleware);
require('dotenv').config();

const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASSWORD+"@"+process.env.DB_SERVER+"/"+process.env.DB_NAME+"?retryWrites=true&w=majority";
async function main() {
  await mongoose.connect(mongoDB);
}
main().catch(err => console.log(err));


app.use('/tasks', tasks);

app.use('/users', users);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500 - Server Error");
});

app.get('/', (req, res) => {
  console.log(process.env.DB_USER)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
