const express = require("express");
const router = express.Router()
const {
    productList,
    productById,
    addProduct,
    deleteProduct,
    updateProduct
} = require("../utils/productUtils")

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: The auto-generated id for the product
 *         name:
 *           type: string
 *           description: The product name
 */

/**
 * @swagger
 * tags:
 *  name: Products
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get the entire products list
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the products
 *         contents:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schemas/Product'
  *       404:
 *          description: No products found
 */


router.get('/', productList)

router.get("/:productId", productById)

router.post('/', addProduct)

router.delete("/:productId", deleteProduct)

router.put("/:productId", updateProduct)

module.exports = router