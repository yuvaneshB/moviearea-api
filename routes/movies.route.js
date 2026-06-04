import express from 'express'

import { MovieIndex, MovieCreate, MovieDelete, MovieUpdate } from '../controllers/movies.controller'; 

const router = express.Router();

//movies/movie---> middleware

// get-for Reading
router.get('/',MovieIndex);

//post- for Creating
router.post('/', MovieCreate);

//put- for Updating
router.put('/:id', MovieUpdate);

//delete- for Delete
router.delete('/:id', MovieDelete);

export default router;