const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoute = require('./routes/userRoute')
const errorHandler = require('./middlewares/errorMiddleware')


const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());



// ROUTES MIDDLEWARES 
app.use('/api/users' , userRoute)
  
// ROUTES
app.get("/", (req, res) => {
  res.status(202).json({ message: "Express API " });
});

// error middlewares 
app.use(errorHandler)

// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 5000;
mongoose
  .set({ strictQuery: false })
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is listen to port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });


