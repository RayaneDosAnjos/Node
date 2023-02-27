const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

let posts = [
    {id:"jhbugubu",
    title:"Teste do mural",
    description:"Descrição teste"
    },
]

app.get("/all", (req, res)=>{
    res.json(JSON.stringify(posts))  
})

app.post("/new", (req, res)=>{

})


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})

