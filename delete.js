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
})//connection build code^name='wilson'
delname='Geo tom';
const deletion=`delete from student where name='${delname}'`;
connection.query(deletion,(err,data)=>{
    if(err)
    {
        console.log("errorrrrr");
    }
    else{
        console.log('data deleted successfully',data)
    }

    
})
connection.end()