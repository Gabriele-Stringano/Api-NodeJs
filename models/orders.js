const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({ 
    products: {
        type: [Schema.Types.ObjectId],
    },
    users: {
        type: [Schema.Types.ObjectId],
    },
    date: {
        type: Date, //y,m,d
      },
})

module.exports = mongoose.model("Order", orderSchema)