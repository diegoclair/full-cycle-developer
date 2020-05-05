const express = require('express');
const routes = require('./router');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});