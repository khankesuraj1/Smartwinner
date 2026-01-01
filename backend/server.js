
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/admin', require('./routes/admin.routes'))
app.use('/api/analytics', require('./routes/analytics.routes'))

app.listen(5000, ()=>console.log('Server running on port 5000'))
