const express = require('express')
const path= require("path")
const app = express()
const port = 3000

app.set("view engine","ejs")
app.set("views",'./views')
app.get('/', (req, res) => {
  res.render("index",{name:"hello",age:14})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})