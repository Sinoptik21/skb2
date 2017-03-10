const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/task1', (req, res) => res.send(((+req.query.a || 0) + (+req.query.b || 0)).toString()));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
