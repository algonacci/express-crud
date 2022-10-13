const mongoose = require("mongoose");

const financeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "transaction name must be provided"],
  },
  description: {
    type: String,
    required: [true, "description of the transaction must be provided"],
  },
  total: {
    type: Number,
    required: [true, "nominal must be provided"],
  },
});

module.exports = mongoose.model("Finance", financeSchema);
