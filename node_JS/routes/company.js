const express=require('express')
const app=express()
const router=express.Router()
const db=require('../db')

router.get('/company',(request,response)=>{
    const statement='select id,title,description from company'
    db.execute(statement,(err,data)=>{
        response.send(data)
    })
})
router.post('/company',(request,response)=>{
    const { title,description }=request.body
    const statement=`insert into comapny (title,description) values ('${title}','${description}')`
    db.execute(statement,(err,data)=>{
        response.send(data)
    })
})
router.put('/company/:id',(request,response)=>{
    const {id}=request.params
    const { title,description }=request.body
    const statement=`update company set title='${title}' ,description='${description}' where id=${id}`
    db.execute(statement,(err,data)=>{
        response.send(data)
    })
})
router.delete('/company/:id',(request,response)=>{
    const {id}=request.params
    const { title,description }=request.body
    const statement=`delete from company  where id=${id}`
    db.execute(statement,(err,data)=>{
        response.send('deleted company')
    })
})
module.exports=router