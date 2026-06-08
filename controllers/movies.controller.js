import Movie from "../models/movie.model.js";

export const MovieIndex = async (req, res)=>{
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

export const MovieCreate = async (req, res)=>{

    //validation your data
    const newMovie = new Movie({
        title:req.body.title,
        desc:req.body.desc,
    });
     try{
        const movie = await newMovie.save();
        return res.status(201).json(movie);
     }catch(error){
        return res.status(400).json({message: error.message});

     }
};

export const MovieDetail = async (req, res)=>{
    try {
        const movie = await Movie.findById(req.params.id)

        if(movie == null) {
            return res.status(404).json({message: "Cannot find movie"});
        } else {
            res.json(movie);
        }
    } catch(error){
        return res.status(500).json({message: error.message});
    }
}
export const MovieUpdate = async (req, res) => {
    try {
        const updateMovie = await Movie.findById(req.params.id);
        if(updateMovie == null) {
            return res.status(404).json({message:"cannot find the movie"})
        }
        if(req.body.title != null) {
            updateMovie.title = req.body.title;
        }
        if(req.body.desc != null){
            updateMovie.desc = req.body.desc;
        }
        const result = await updateMovie.save();
        return res.json(result);
        }catch (error) {
        return res.status(500).json({message: error.message})       
    }
}


export const MovieDelete = async (req, res)=>{
    try {
        const Delete = await Movie.findByIdAndDelete(req.params.id);
        
        if (Delete == null) {
           return res.status(404).json({message:"not founded"})
        } else {
           return res.json({message: "item deleted"})
        }
    } catch (error) {
          return res.status(500).json({message: error.message});
    }
}