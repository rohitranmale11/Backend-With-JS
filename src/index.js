// require('dotenv').config()

import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path:"./env"
})


connectDB()

/*
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error" , (error) => {
            console.log("Error" , error)
            throw error
        })
        
        app.listen(process.env.PORT)

    } catch (error) {
        console.error("Database Connection Failed")
        throw err
    }

}) () 
*/