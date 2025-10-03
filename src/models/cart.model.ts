import mongoose from "mongoose";
const {Schema} = mongoose;

const cartSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },

    items : {
        product : {
            type : Schema.Types.ObjectId,
            ref : 'Product'
        },
        variant : String,
        quantity : Number,
        price : Number
    },
    subtotal : Number,
    expiresAt : {
        type: Date
    }
} , {timestamps : true});

const Cart = mongoose.model("Cart" , cartSchema);

export default Cart;