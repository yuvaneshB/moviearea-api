import { model, Schema } from "mongoose";


//write the schema
const schema = new Schema({
    title: {
        type: String,
        required: true,
    
    },
    desc: {
        type: String,
        required: true,
    }
});

const Movie = model("Movie", schema);

export default Movie; 