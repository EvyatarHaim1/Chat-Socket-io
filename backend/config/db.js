const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'chat-app',
        });
        console.log(`MongoDB connected : ${conn.connection.host}`)
    } catch (err) {
        console.log(err.message)
        process.exit()
    }
}

module.exports = connectDB