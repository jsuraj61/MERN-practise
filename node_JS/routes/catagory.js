const express=require('express')
//rpoter will be used to add routes in the app server
const router=express.Router()
const db=require('../db')

router.get('/category',(request,response)=>{
    const statement='select id,title,description from category'
    db.execute(statement,(err,data)=>{
        response.send(data)
    })
})
router.post('/category',(request,response)=>{
    const { title,description }=request.body//de-structuring
    const statement=`insert into category (title, description) values ('${title}','${description}')`
    db.execute(statement, (err,data) =>{
        response.send(data)
    })
})
router.put('/category/:id',(request,response)=>{
    const {id}=request.params
    const { title,description }=request.body
    const statement=`update category set title='${title}' ,description='${description}' where id=${id}`
    db.execute(statement,(err,data)=>{
        response.send(data)
    })
})
router.delete('/category/:id',(request,response)=>{
    const {id}=request.params
    const { title,description }=request.body
    const statement=`delete from category  where id=${id}`
    db.execute(statement,(err,data)=>{
        response.send('deleted category')
    })
})
//exports the router having all the routes related to the category
module.exports=router