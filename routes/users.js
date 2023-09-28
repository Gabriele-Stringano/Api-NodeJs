const express = require("express");
const router = express.Router()
const Joi = require('joi')
const {
  userList,
  addUser,
  deleteUser,
  updateUser,
  userById
} = require("../utils/userUtils");

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - surname
 *         - email
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: The auto-generated id for the user
 *         name:
 *           type: string
 *           description: The user name
 *         surname:
 *           type: string
 *           description: The user surname
 *         email:
 *           type: string
 *           description: The user email
 */

/**
 * @swagger
 * tags:
 *  name: Users
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get the entire users list
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         contents:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schemas/User'
  *       404:
 *          description: No books found
 */

/**
 * @swagger
 * /api/users/{userID}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Users]
 *     parameters:
 *      - in: path
 *        name: userID
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *     responses:
 *       200:
 *         description: The user by id
 *         contents:
 *           application/json:
 *             schema:
 *                 $ref: '#components/schemas/User'
 *       404:
 *          description: The book was not found
 */

// all users list
router.get("/", userList)

router.get("/:userId", userById)

//add a new user
router.post('/', addUser)

router.delete("/:userId", deleteUser)

router.put("/:userId", updateUser)


module.exports = router;