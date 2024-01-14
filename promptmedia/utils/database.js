import mongoose, { mongo } from "mongoose";

let isConnected=false;

export const connectToDB=async()=>{
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log("connected");
        return;
        }

        try {
            await mongoose.connect(process.env.MONGODB_URI,{
                dbName:"share_propmt",
                useNewUrlParser:true,
                UseUnifiedTopology:true,
            })
            isConnected=true;
            console.log("MongoDB connected successfully");
            
        } catch (error) {
            console.log(error);
            
        }
}