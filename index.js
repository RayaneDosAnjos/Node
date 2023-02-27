const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const posts = require('./model/posts')



app.get("/all", (req, res)=>{
    res.json(JSON.stringify(posts.getAll()))  
})

app.post("/new",bodyParser.json(), (req, res)=>{
    let title = req.body.title
    let description = req.body.description
    
    posts.newPost(title, description)


    res.send("post adicionado")
})


app.listen(PORT, ()=>{
    console.log("server running on port ", PORT)
})


