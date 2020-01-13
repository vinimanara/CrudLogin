const express = require('express');
const app = express();
const routes = require('./server/routes/app');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('./node_modules/dotenv');
dotenv.config()

/* Database Connection */
const dbOptions = {
  keepAlive: 1,
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
mongoose.connect(process.env.DBURL, dbOptions)
  .then(() => console.log('db connected!'))
  .catch(() => console.log('db connection error!'))

app.use(express.json())
app.use(bodyParser.json())
app.use(routes)
app.listen(port, () => console.log(`Server running on port ${port}`))

app.use((req, res) => {
  res.status(404).json(
    {
      code: '404',
      type: 'Error',
      message: 'Endpoint not found'
    }
  )
})