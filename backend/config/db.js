const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{});
        console.log('mongodb connected');
        
    } catch (err) {
        console.error("error connecting to database",err);
        process.exit(1);
    }
};

module.exports = connectDB;