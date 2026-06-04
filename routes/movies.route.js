import express from 'express'

const router = express.Router();

//movies/movie---> middleware

// get-for Reading
router.get('/', (req, res)=>{
    res.send("Get all movie list");
});

//post- for Creating
router.post('/', (req, res)=>{
    res.send("Create movie");
});

//put- for Updating
router.put('/:id', (req, res)=>{
    res.send("Update a movie");
});

//delete- for Delete
router.delete('/:id', (req, res)=>{
    res.send("Delete a movie");
});

export default router;