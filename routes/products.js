const express = require("express");
const router = express.Router()
const {
    productList,
    productById,
    addProduct,
    deleteProduct,
    updateProduct
} = require("../utils/productUtils")

router.get('/', productList )

router.get("/:productId", productById)

router.post('/', addProduct )

router.delete( "/:productId", deleteProduct)

router.put( "/:productId", updateProduct )

module.exports = router