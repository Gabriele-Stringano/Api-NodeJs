const Order = require ('../models/orders')
const Product = require ('../models/products')
const {validateOrder,validateOrderDates} = require ('../validators/order')

const orderList = async (req, res) => {
    try {
      const orders = await Order.find()
      if (!orders) throw "not found"
      res.status(200).json(orders)
    } catch (err) {
      res.status(404).json({ message: err })
    }
  }

  const ordersByDate = async (req, res) => {
    try {
      const datetarget = req.params.date
     const orders = await Order.find( { date: datetarget  });
     // print a message if no documents were found 
     if(await orders.length < 1) throw "not found";
      res.status(200).json(orders);
    } catch (err) {
      res.status(404).json({ message: err });
    }
  }

  const ordersByProduct = async (req, res) => {
    try {
      const productTarget = req.params.product
     const orders = await Order.find( { products: productTarget }); 
     // print a message if no documents were found 
     if(await orders.length < 1) throw "not found";
      res.status(200).json(orders);
    } catch (err) {
      res.status(404).json({ message: err });
    }
  }

  const addOrder = async (req, res) => {
    const {error, value} = validateOrder(req.body)
   if(error){
    return res.status(422).json({ message: error.details })
   }

    let products = await Product.find()
    let check
    req.body.products.forEach( (element) => { 
        check = false 
        products.forEach( (product) => {
           if(element == product._id){ check = true}
        })
    })
    if(check == false){ return res.status(422).json({ message: 'id non validp' }) }
        
        const order = new Order({
        products: req.body.products,
        users:req.body.users,
        date: req.body.date
    })
    try {
      const savedOrder = await order.save();
      res.status(201).json(savedOrder);
    } catch (err) {
      res.status(404).json({ message: err });
    }
  }

  const deleteOrder = async (req, res) => {
    try {
      const removedOrder = await Order.deleteOne({ _id: req.params.orderId });
      res.status(200).json(removedOrder);
    } catch (err) {
      res.status(404).json({ message: err });
    }
  }

  module.exports = {
    orderList,
    ordersByDate,
    ordersByProduct,
    addOrder,
    deleteOrder,
  }