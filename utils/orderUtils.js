const Order = require ('../models/orders')
const Product = require ('../models/products')
const User = require ('../models/users')
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

  const orderById = async (req, res) => {
    try {
      const order = await Order.findById(req.params.orderId);
      if (!order) throw "not found";
      res.status(200).json(order);
    } catch (err) {
      res.status(404).json({ message: err });
    }
  }

  const ordersByDate = async (req, res) => {
    try {
      const datetarget = req.params.date
     const orders = await Order.find( { date: datetarget  });
     // print a message if no documents were found 
     if(orders.length < 1) throw "not found";
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
     if(orders.length < 1) throw "not found";
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

   let check
   let elementChecked

    let products = await Product.find()
    req.body.products.every( (element) => {
      elementChecked = element
      check = false
        products.forEach( (product) => {
           if(element == product._id){ check = true}
        })
      if(check == false) return check
      return check
    })
    if(check == false){ return res.status(422).json({ message: 'id prodotto non valido ' + elementChecked }) }

    let users = await User.find()
    req.body.users.every( (element) => { 
      elementChecked = element
      check = false
          users.forEach( (user) => {
           if(element == user._id){ check = true}
        })
      if(check == false) return check
      return check
    })
    if(check == false){ return res.status(422).json({ message: 'id user non valido ' + elementChecked }) }

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

  const updateOrder = async (req, res) => {
    const {error, value} = validateOrderDates(req.body)
    if(error){
      return res.status(422).json({ message: error.details })
     } 
    try {
      const updatedOrder = await Order.updateOne(
        { _id: req.params.orderId },
        {
          $set: {
            products: req.body.products,
            users:req.body.users,
            date: req.body.date
          },
        }
      );
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(404).json({ message: err });
    }
  }

  const updateOrderAdd = async (req, res) => {
    const {error, value} = validateOrderDates(req.body)
    if(error){
      console.log(error)
      return res.status(422).json({ message: error.details })
     } 
    try {
      const order = await Order.findById(req.params.orderId);

      let temporalProducts = order.products
      if (typeof(req.body.products) != "undefined"){
        req.body.products.forEach( (product) => {
          temporalProducts.push(product)
        })
      }

      let temporalUsers = order.users
      if (typeof(req.body.users) != "undefined"){
        req.body.users.forEach( (user) => {
          temporalUsers.push(user)
        })
      }

      const updatedOrder = await Order.updateOne(
        { _id: req.params.orderId },
        {
          $set: {
            products: temporalProducts,
            users:temporalUsers,
            date: req.body.date
          },
        }
      );
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(404).json({ message: err });
    }
  }

  const updateOrderRemove = async (req, res) => {
    const {error, value} = validateOrderDates(req.body)
    if(error){
      console.log(error)
      return res.status(422).json({ message: error.details })
     } 
    try {
      const order = await Order.findById(req.params.orderId);

      let temporalProducts = order.products
      if (typeof(req.body.products) != "undefined"){
        req.body.products.forEach( (product) => {
          temporalProducts = temporalProducts.filter( element => element != product)
        })
      }

      let temporalUsers = order.users
      if (typeof(req.body.users) != "undefined"){
        req.body.users.forEach( (user) => {
          temporalUsers = temporalUsers.filter( element => element != user)
        })
      }

      const updatedOrder = await Order.updateOne(
        { _id: req.params.orderId },
        {
          $set: {
            products: temporalProducts,
            users:temporalUsers,
            date: req.body.date
          },
        }
      );
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(404).json({ message: err });
    }
  }

  module.exports = {
    orderList,
    orderById,
    ordersByDate,
    ordersByProduct,
    addOrder,
    deleteOrder,
    updateOrder,
    updateOrderAdd,
    updateOrderRemove,
  }