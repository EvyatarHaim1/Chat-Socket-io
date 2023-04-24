const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
const userRoutes = require('./routes/userRoutes')
var cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB()
const app = express();
app.use(express.json())
app.use(cors())



app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/chat', (req, res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find(c => c._id === req.params.id)
    res.send(singleChat)
})

app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`server run on port ${PORT}`))