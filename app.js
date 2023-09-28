const express = require('express')
const mongoose = require('mongoose')
const helmet = require("helmet");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express()
const productsRouter = require('./routes/products')
const usersRouter = require('./routes/users')
const ordersRouter = require('./routes/orders')

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Travel API",
      version: "1.0.0",
      description: "RESTful JSON API for a travel agency",
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ],
  },
  apis: ["./routes/*.js"]
}

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(express.json())

//Helmet helps you secure your Express apps by setting various HTTP headers
app.use(helmet());

//Mongoose will wrap any objects in the query filter with MongoDB's $eq query operator, which blocks query selector injections
mongoose.set('sanitizeFilter', true);
//mongoose.trusted

// routes
app.use('/api/products', productsRouter)
app.use('/api/users', usersRouter)
app.use('/api/orders', ordersRouter)

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Orizon, for sustainable travel" });
});

// error 404
app.get("*", (req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});


module.exports = app

