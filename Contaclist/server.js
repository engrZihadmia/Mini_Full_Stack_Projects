const express= require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const app=express()

const PORT=process.env.PORT||8000;
const mongoDbUrl=process.env.mongoDbUrl;


const CreateServer=async(mongoDbUrl, PORT)=>{

   try{
     let connectMongoDb= await mongoose.connect(mongoDbUrl)
    console.log("MOngoDb is Connected")

    app.listen(PORT, ()=>{
        console.log(`Server is Running on Port ${PORT}`)
    })
   }

   catch(err){
    console.log(err.message)
   }


}

CreateServer(mongoDbUrl,PORT )

