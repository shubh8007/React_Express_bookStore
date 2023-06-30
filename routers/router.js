const express=require("express")
const router=express.Router();
const connection=require("../db/dbconnect")

router.get("/books",(req,resp)=>{
    connection.query("select * from book",(err,data)=>{
        if(err){
            resp.status(500).send("error occured"+JSON.stringify(err))
        }
        else{
            resp.send(data)
        }
    })
})

router.get("/books/book/:bid",(req,resp)=>{
    connection.query("select * from book where bid=?",[req.params.bid],(err,data)=>{
        if(err){
            resp.status(500).send("error occured"+JSON.stringify(err))
        }
        else{
            resp.send(data)
        }
    })
})

router.post("/books/insert/:bid",(req,resp)=>{
    var bid=req.body.bid;
    var bname=req.body.bname;
    var author=req.body.author;
    var language=req.body.language;
    var price=req.body.price;
    connection.query("insert into book values(?,?,?,?,?)",[bid,bname,author,language,price],(err)=>{
        if(err){
            resp.status(500).send("data not inserted"+JSON.stringify(err))
        }
        else{
            resp.send("inserted data suceesfully..")
        }
    })
})

router.delete("/books/delete/:bid",(req,resp)=>{
    connection.query("delete from book where bid=?",[req.params.bid],(err)=>{
        if(err){
            resp.status(500).send("book is not deleted"+JSON.stringify(err))
        }
        else{
            resp.send("book deleted sucessfully")
        }
    })
})
router.put("/books/update/:bid",(req,resp)=>{
    var bid=req.body.bid;
    var bname=req.body.bname;
    var author=req.body.author;
    var language=req.body.language;
    var price=req.body.price;
    connection.query("update book set bname=?,author=?,language=?,price=? where bid=?",[bname,author,language,price,bid],(err)=>{
        if(err){
            resp.status(500).send("book not updated"+JSON.stringify(err))
        }
        else{
            resp.send("book updated sucessfully")
        }
    })
})

module.exports=router;