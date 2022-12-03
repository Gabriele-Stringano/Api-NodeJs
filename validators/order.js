const Joi= require('joi')
Joi.objectId = require('joi-objectid')(Joi);

const validator = (schema) => (payload) => 
schema.validate(payload, {abortEarly : false})


const orderSchema = Joi.object({
    products: Joi.array().items(Joi.objectId()).required(),
    users: Joi.array().items(Joi.objectId()).required(),
    date: Joi.date().required()
});

const orderDates = Joi.object({
    products: Joi.array().items(Joi.objectId()),
    users: Joi.array().items(Joi.objectId()),
    date: Joi.date()
});

  validateOrder = validator(orderSchema)
  validateOrderDates = validator(orderDates)

  module.exports = {
    validateOrder,
    validateOrderDates
  }