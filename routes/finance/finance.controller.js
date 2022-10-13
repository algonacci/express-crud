const Finance = require("../../models/finance");

const getAllTransactions = async (req, res) => {
  const transactions = await Finance.find({});
  res.status(200).json({ transactions });
};

const createTransaction = async (req, res) => {
  const transaction = await Finance.create(req.body);
  res.status(201).json(transaction);
};

const getTransaction = async (req, res) => {
  const { id: transactionID } = req.params;
  const transaction = await Finance.findOne({ _id: transactionID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!transaction) {
    res.status(400).json({ error: `No transaction with ID: ${transactionID}` });
  }
  res.status(200).json({ transaction });
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
    res.status(400).json({ error: `No transaction with ID: ${transactionID}` });
  }
  res.status(200).json({ transaction });
};

const deleteTransaction = async (req, res) => {
  const { id: transactionID } = req.params;
  const transaction = await Finance.findOneAndDelete({ _id: transactionID });
  if (!transaction) {
    res.status(400).json({ error: `No transaction with ID: ${transactionID}` });
  }
  res.status(200).json({ transaction });
};

module.exports = {
  getAllTransactions,
  createTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
};
