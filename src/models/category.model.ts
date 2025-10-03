import mongoose from "mongoose";
const {Schema} = mongoose;

const categorySchema = new Schema({
    name: {
        type : String,
        require : true
    },
    slug: {
        type : String ,
        require : true
    },
    description: {
        type : String
    },
    parent : {
        type: Schema.Types.ObjectId,
        ref : 'Category'
    },
    image : {
        type : String
    },
    isActive : {
        type : Boolean
    },
    order : {
        type : String
    }

 
} , {timestamps : true})

const Category = mongoose.model('Category' , categorySchema);

export default Category;
