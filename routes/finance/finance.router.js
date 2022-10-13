const express = require("express");
const router = express.Router();

const {
  getAllTransactions,
  createTransaction,
  getTransaction,
  updateTransaction,
} = require("./finance.controller");

router.route("/").get(getAllTransactions);
router.route("/").post(createTransaction);
router.route("/:id").get(getTransaction).patch(updateTransaction);

module.exports = router;
