const express = require("express");

app = express();

app.use(express.json());
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} - ${delta}ms`);
});

app.get("/", (req, res) => {
  res.send('<h1>Finance Tracker</h1><br><a href="/list">Get All Data</a>');
});

module.exports = app;
