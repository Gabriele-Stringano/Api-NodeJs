const Joi= require('joi')

const validator = (schema) => (payload) => 
schema.validate(payload, {abortEarly : false})

const productSchema = Joi.object({
    name: Joi.string().required(),
  })

const productDates = Joi.object({
  name: Joi.string(),
})

  validateProduct = validator(productSchema)
  validateProductDates = validator(productDates)

  module.exports = {
    validateProduct,
    validateProductDates
  }