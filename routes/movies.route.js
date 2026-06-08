import express from 'express'

import { MovieIndex, MovieCreate, MovieDelete, MovieDetail, MovieUpdate } from '../controllers/movies.controller.js'; 

const router = express.Router();

//movies/movie---> middleware

// get-for Reading
router.get('/',MovieIndex);

router.get("/:id", MovieDetail);

//post- for Creating
router.post('/', MovieCreate);

//put- for Updating
router.put('/:id', MovieUpdate);

//delete- for Delete
router.delete('/:id', MovieDelete);

export default router;