const express = require("express");
const router = express.Router();

const {
  getAllTransactions,
  createTransaction,
} = require("./finance.controller");

router.route("/").get(getAllTransactions);
router.route("/").post(createTransaction);

module.exports = router;
