import mongoose from "mongoose";

const {Schema} = mongoose;

const reviewModel = new Schema({
    product : {
        type : Schema.Types.ObjectId,
        ref : 'Product'
    },
    user : {
        type: Schema.Types.ObjectId,
        ref : 'User'
    },
    rating : {
        type : Number,
        enum : {
            values : [1,2,3,4,5]
        }
    },
    title : String,
    comment : String,
    images : [String],
    isVarified : {
        type : Boolean,
        require : false
    }
} , {timestamps : true})

const Review = mongoose.model( "Review" , reviewModel);

export default Review;