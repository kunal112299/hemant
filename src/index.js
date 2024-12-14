import dotenv from "dotenv";
import connectDB from "./db/db.js";
// import express from express;
// const app = express();

dotenv.config({
    path: './env'
})

connectDB();






/*
( async () => {
    try {
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       app.on("error", (error) => {
        console.log("Express is not able to communicate with the db: ", error);
        throw error;
       })

       app.listen(process.env.PORT, () => {
        console.log(`Server is up and running at port ${process.env.PORT}`);
        
       })
    } catch (error) {
        console.log("Error: ", error);
        throw error
        
    }
})()
    */