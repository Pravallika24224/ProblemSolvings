const express = require('express');

const app = express();
let errorCount = 0;

// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

app.get('/user', function(req, res) {
  throw new Error("User not found");
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

// global catch
app.use((req, res, next) => {
  res.status(404).send({})
  errorCount = errorCount + 1
})

app.use(3000, () => console.log("listening to port 3000"))