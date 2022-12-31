const express=require('express')
const app=express()
const db=require('../db')
const router=express.Router()

router.get('/product',(request,response)=>{
   const statement=`select id,title,description,price,category,company from product`
   db.execute(statement,(err,data)=>{
    response.send(data)
   })
})
router.post('/product',(request,response)=>{
    const { title, description, price, category, company }=request.body
    const statement=`insert into product (title, description, price, category, company) values ('${title}','${description}','${price}','${category}','${company}')`
    db.execute(statement,(err,data)=>{
        response.send(data)
    })
})
router.put('/product/:id',(request,response)=>{
    const {id}=request.params
    const { title, description, price, category, company }=request.body
    const statement=`update product set title='${title}',description='${description}',price='${price}',category='${category}',company='${company}' where id=${id} `
    db.execute(statement,(err,data)=>{
        response.send(data)
    })
   
})
router.delete('/product/:id',(request,response)=>{
    const {id}=request.params
    const { title, description, price, category, company }=request.body
    const statement=`delete from product  where id=${id}`
    db.execute(statement,(err,data)=>{
        response.send('deleted product')
    })
})
// app.listen(3000,'0.0.0.0',()=>{
//     console.log('server started on port')
// })




module.exports=router