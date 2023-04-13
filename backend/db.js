// mongodb://localhost:27017/inotebook
const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI="mongodb://localhost:27017/inotebook"
const connectToMongo= async()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}
module.exports= connectToMongo;