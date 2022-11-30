const Product = require ('../models/products')
const Joi= require('joi')
const {validateProduct, validateProductDates} = require ('../validators/product')

const productList = async (req, res) => {
    try {
      const products = await Product.find()
      if (!products) throw "not found"
      res.status(200).json(products)
    } catch (err) {
      res.status(404).json({ message: err })
    }
  }

  const productById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.productId);
      if (!product) throw "not found";
      res.status(200).json(product);
    } catch (err) {
      res.status(404).json({ message: err });
    }
  }

  const addProduct = async (req, res) => {
    const {error, value} = validateProduct(req.body)
   if(error){
    console.log(error)
    return res.status(422).json({ message: error.details })
   }
    const product = new Product({
      name: req.body.name,
    })
  
    try {
      const savedProduct = await product.save();
      res.status(201).json(savedProduct);
    } catch (err) {
      res.status(404).json({ message: err });
    }
  }

  const deleteProduct = async (req, res) => {
    try {
      const removedProduct = await Product.deleteOne({ _id: req.params.productId });
      res.status(200).json(removedProduct);
    } catch (err) {
      res.status(404).json({ message: err });
    }
  }

  const updateProduct = async (req, res) => {
    const {error, value} = validateProductDates(req.body)
    if(error){
      console.log(error)
      return res.status(422).json({ message: error.details })
     } 
    try {
      const updatedProduct = await Product.updateOne(
        { _id: req.params.productId },
        {
          $set: {
            name: req.body.name,
          },
        }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(404).json({ message: err });
    }
  }

  module.exports = {
    productList,
    productById,
    addProduct,
    deleteProduct,
    updateProduct
  }