const express = require('express')
const path= require("path")
const cors=require('cors')
const app = express()
const port = 4000
app.use(cors())
app.set("view engine","ejs")
app.set("views",'./views')
app.get('/', (req, res) => {
 return res.render("index",{name:"hello",age:14})
 
})
app.get('/api/v1', (req, res) => {
  // res.render("index",{name:"hello",age:14})
  return res.json([
    {email:"lab1@email.com"},
    {email:"lab2@email.com"},
    {email:"lab3@email.com"},
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})