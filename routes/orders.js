const express = require("express");
const router = express.Router()
const {
    orderList,
    ordersByDate,
    ordersByProduct,
    addOrder,
    deleteOrder,
} = require("../utils/orderUtils")

router.get('/',orderList )

router.get('/by-date/:date',ordersByDate)

router.get('/by-product/:product',ordersByProduct)

router.post('/',addOrder)

router.delete( "/:orderId", deleteOrder)

module.exports = router