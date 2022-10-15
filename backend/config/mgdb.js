// replace USER, PASSWORD, & MARQUE by yours in .env file

const { default: mongoose } = require("mongoose");

/*const mongoose = require('mongoose');
mongoose
  .connect(
    "mongodb+srv://NDIJOUX" +
      process.env.MONGO_DB_USER +
      "%uvYGdWfBB7Mb010y" +
      process.env.MONGO_DB_USER_MDP +
      "cluster0.g8748wf.mongodb.net/?retryWrites=true&w=majority" +
      process.env.MONGO_DB_MARQUE,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  /*.connect(
    "mongodb+srv://" +
      process.env.MONGO_DB_USER +
      ":" +
      process.env.MONGO_DB_USER_MDP +
      "@cluster0.xxnb8.mongodb.net/" +
      process.env.MONGO_DB_MARQUE,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() =>
    console.log(
      "Successful connection to MongoDB"
    )
  )
  .catch((error) => console.log(error)); */

  mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Successful connection to MongoDB"))
  .catch(() => console.log("Unsuccessful connection to MongoDB"));
  