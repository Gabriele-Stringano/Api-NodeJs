const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const dbURI= process.env.DBURI

const connectionDB = async () => {
    await mongoose.connect(dbURI)
    console.log('connected successfully')
 }

 module.exports= connectionDB