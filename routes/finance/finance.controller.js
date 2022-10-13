const Finance = require("../../models/finance");

const getAllTransactions = async (req, res) => {
  const transactions = await Finance.find({});
  res.status(200).json({ transactions });
};

const createTransaction = async (req, res) => {
  const transaction = await Finance.create(req.body);
  res.status(201).json(transaction);
};

module.exports = {
  getAllTransactions,
  createTransaction,
};
