import express from "express";

const app = express()

const PORT = 6969;
app.get('/', (req, res)=>{
    res.json({message: "hello guys"})
});

app.listen(PORT, ()=>{
    console.log(`The server is running at http://localhost:${PORT}`)
})