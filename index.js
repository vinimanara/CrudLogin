const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoute = require('./routes/user')
const apiRoute = require('./routes/api')
const authRoute = require('./routes/auth')
const verifyToken = require('./routes/verifyToken');

const dotenv = require('dotenv')
dotenv.config()


//dbconnection
const dbOptions = {
  keepAlive: 1,
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.connect(process.env.DBURL, dbOptions)
  .then(() => console.log('db connected!'))
  .catch(() => console.log('db connection error!'))


app.use(express.json())

//routes
app.use('/user', userRoute)
app.use('/auth', authRoute)
app.use('/api', verifyToken, apiRoute)

app.listen(3000, () => console.log('Server running'))

