import mongoose from "mongoose";
const connectToMongoDB = async()=>{
    const URI=`mongodb+srv://ganeshprabhakaran01:osvStYXV3gCjHPQa@cluster0.p5tplkh.mongodb.net/chat-app-db?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URI);
        console.log("Database is connected")
    }
    catch(error)
    {
        console.log("Error in DB connection MongoDB",error.message)
    }
}
export default connectToMongoDB;