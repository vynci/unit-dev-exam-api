const express = require("express");
const app = express();
const port = 3001;
const healthMessage = `Server is running at ${port}`;
const environment = require('./environment')

const mongoose = require("mongoose");
const MONGODB_URL = environment.MONGODB_URL;

mongoose.Promise = global.Promise;
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

app.use(express.json());

app.get("/", (req, res)=>{
    res.json({ message: healthMessage});
});

app.listen(port, ()=> {
    console.log(healthMessage);
});

require('./resources/sales/routes.js')(app);