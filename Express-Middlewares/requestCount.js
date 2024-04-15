const express = require('express');

const app = express();
let requestCount = 0;

// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

app.use((req, res, next) => {
  requestCount = requestCount + 1
  next()
})
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

app.listen(3000,() => console.log("Listening to port 3000"))