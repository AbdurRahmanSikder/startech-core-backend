import mongoose  from "mongoose";
const {Schema} = mongoose;

const productSchema = new Schema({
    name : { type : String , require : true} ,
    slug : { type : String , require : true}  ,
    description : String,
    shortDescription : String,
    price : {type : Number , require : true},
    comparePrice : Number,
    cost : Number, // internal
    quantity : Number,
    category : [{type: Schema.Types.ObjectId , ref : 'Category'}],
    brand : String ,
    images : [String],
    thumbnail : String, //single thumbnail
    tags : [String],
    averageratings : {type : Number , default: 0},
    reviewCount : { type : Number , default : 0},
    isActive : {
        type : Boolean,
        default : true
    },
    isFeatured : {
        type : Boolean,
        default : false
    },
    weight : Number,
    dimensions : {
        length : Number,
        width : Number,
        height : Number},
} , {timestamps : true});

const Product = mongoose.model("Product" , productSchema);

export default Product;