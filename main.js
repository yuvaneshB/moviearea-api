import express from "express";

const app = express()

const PORT = 6969;
app.get('/', (req, res)=>{
    res.json({message: "hello guys"})
});

// CRUD functionality of movies
// get-for Reading
app.get('/movies', ()=>{
    
});

//post- for Creating
app.post('/movies', ()=>{

});

//put- for Updating
app.put('/movies/:id', ()=>{

});

//delete- for Delete
app.delet('/movies/:id', ()=>{

});
app.listen(PORT, ()=>{
    console.log(`The server is running at http://localhost:${PORT}`)
})