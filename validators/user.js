const Joi= require('joi')

const validator = (schema) => (payload) => 
schema.validate(payload, {abortEarly : false})

const userSchema = Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    email: Joi.string().email().required()
  })

const userDates = Joi.object({
  name: Joi.string(),
  surname: Joi.string(),
  email: Joi.string().email()
})

  validateUser = validator(userSchema)
  validateuserDates = validator(userDates)

  module.exports = {
    validateUser,
    validateuserDates
  }