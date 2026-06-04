import express from "express";
import movieRoutes from "./routes/movies.route.js"

const app = express()

const PORT = 6969;
app.get('/', (req, res)=>{
    res.json({message: "hello guys"})
});

// CRUD functionality of movies
// CLINENT -> MIDDLEWARE -> SERVER

app.use('/movies', movieRoutes);

app.listen(PORT, ()=>{
    console.log(`The server is running at http://localhost:${PORT}`)
})