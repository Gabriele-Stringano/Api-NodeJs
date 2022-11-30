const express = require("express");
const router = express.Router()
const Joi= require('joi')
const {
  userList,
  addUser,
  deleteUser,
  updateUser,
  userById
} = require("../utils/userUtils");


  // all users list
  router.get("/", userList)

  router.get("/:userId", userById)

  //add a new user
  router.post('/', addUser )

  router.delete( "/:userId", deleteUser)

  router.put( "/:userId", updateUser )


module.exports = router