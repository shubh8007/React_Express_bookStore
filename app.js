const express=require("express")
const app=express()
const router=require("./routers/router")
const bodyparser=require("body-parser")
const cors=require("cors")

app.use(cors({
    origin:"http://localhost:3000",
    extended:true,
}))

app.use(bodyparser.urlencoded({extended:false}))

app.use(bodyparser.json())

app.use("/",router)

app.listen(8007,()=>{
    console.log("your port is running on port 8007")
})