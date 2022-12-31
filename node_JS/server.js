const express=require('express')
const app=express()
const routerCompany=require('./routes/company')
const routerCategory=require('./routes/catagory')
const routerProduct=require('./routes/product')
const routerUsers=require('./routes/user')
const bodyParser=require('body-parser')

app.use(bodyParser.json())
//middlewear
app.use(routerCategory)
app.use(routerCategory)
app.use(routerProduct)
app.use(routerUsers)


app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port ')
})