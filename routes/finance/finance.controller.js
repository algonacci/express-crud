const Finance = require("../../models/finance");
const { createCustomError } = require("../../errors/custom-error");

const getAllTransactions = async (req, res) => {
  const transactions = await Finance.find({});
  res.status(200).json({ transactions });
};

const createTransaction = async (req, res) => {
  const transaction = await Finance.create(req.body);
  res.status(201).json(transaction);
};

const updateTransaction = async (req, res, next) => {
  const { id: transactionID } = req.params;
  const transaction = await Finance.findByIdAndUpdate(
    { _id: transactionID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!transaction) {
    return next(
      createCustomError(`No transaction with ID: ${transactionID}`, 404)
    );
  }
  res.status(200).json({ transaction });
};

module.exports = {
  getAllTransactions,
  createTransaction,
  updateTransaction,
};
