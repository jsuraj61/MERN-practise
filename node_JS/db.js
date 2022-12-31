const mysql2=require('mysql2')
const pool=mysql2.createPool({
    host:'localhost',
    user:'root',
    port:3306,
    password:'root123',
    database:'pritam',
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0,
})
module.exports=pool