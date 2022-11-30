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
        type: Date,
        default: Date.now,
      },
})

module.exports = mongoose.model("Order", orderSchema)