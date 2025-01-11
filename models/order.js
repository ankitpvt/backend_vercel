const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  customerName: String,
  items: [{ name: String, price: Number }],
  total: Number,
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Order", OrderSchema);
