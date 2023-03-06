const express =  require('express')
const mongoose =  require('mongoose')
const bodyParser = require('body-parser')
const studentsRouter = require("./routes/router");



const app =  express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const db = "mongodb://localhost/school";
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


  app.use("/students", studentsRouter);




app.listen(5000, () => console.log("Server Running"));
