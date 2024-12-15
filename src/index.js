import dotenv from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("DB connection failed", error);
  });

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
