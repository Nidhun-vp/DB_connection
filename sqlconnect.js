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
 //values
const document={admno:'4000',name:'geo',place:'thrissur'};
const sql='insert into student(admno,name,place) values (?,?,?)';
//query execute
connection.query(sql,[document.admno,document.name,document.place],(err,data)=>{


if(err){
    return;
}
else{
    console.log('data inserted successfully',data.insertId);
}});
connection.end();

//-----for 
// const select='SELECT * FROM student';
// connection.query(select,(err,data)=>{
//     if(err)
//     {
//         console.log("errorrrrr");
//     }
//     else{
//         console.log('data fetched',data)
//     }

    
// })
// connection.end()