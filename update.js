const mysql=require('mysql2')
const connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'root',
        database:'database2'
    }
);
connection.connect((err)=>{
    if(err){
        console.log('error plz check the connection...',err)

    }else{
        console.log('connected successffully')
    }
})//connection build code^
newname='wilson'
oldname='john'
const update=`update student set name='${newname}' where name='${oldname}'`;
connection.query(update,(err,data)=>{
    if(err)
    {
        console.log("errorrrrr");
    }
    else{
        console.log('data updated successfully',data)
    }

    
})
connection.end()