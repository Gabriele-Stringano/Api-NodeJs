const express = require("express");
const router = express.Router()
const {
    orderList,
    orderById,
    ordersByDate,
    ordersByProduct,
    addOrder,
    deleteOrder,
    updateOrder,
    updateOrderAdd,
    updateOrderRemove,
} = require("../utils/orderUtils")

router.get('/',orderList )

router.get('/:orderId',orderById )

router.get('/by-date/:date',ordersByDate)

router.get('/by-product/:product',ordersByProduct)

router.post('/',addOrder)

router.delete( "/:orderId", deleteOrder)

router.put("/:orderId", updateOrder)

router.put("/add-infos/:orderId", updateOrderAdd)

router.put("/remove-infos/:orderId", updateOrderRemove)

module.exports = router