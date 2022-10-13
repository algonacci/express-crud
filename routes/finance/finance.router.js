const express = require("express");
const router = express.Router();

const {
  getAllTransactions,
  createTransaction,
  updateTransaction,
} = require("./finance.controller");

router.route("/").get(getAllTransactions);
router.route("/").post(createTransaction);
router.route("/:id").patch(updateTransaction);

module.exports = router;
