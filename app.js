const express = require("express");

app = express();

const financeRouter = require("./routes/finance/finance.router");

app.use(express.json());
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} - ${delta}ms`);
});

app.get("/", (req, res) => {
  res.send('<h1>Finance Tracker</h1><br><a href="/finance">Get All Data</a>');
});

app.use("/finance", financeRouter);

module.exports = app;
