const mysql=require("mysql");

const mysqlconnection=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"8007992007",
    "database":"exam",
    "port":"3306"
})

mysqlconnection.connect((err)=>{
    if(err){
        console.log("error occured"+JSON.stringify(err))
    }
    else{
        console.log("database connection in done on port 8007")
    }
})



module.exports=mysqlconnection;