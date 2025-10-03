import mongoose from "mongoose"
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        require : true,
    },
    lastName: {
        type: String,
        require : true
    },
    email: {
        type: String,
        require : true
    },
    password: {
        type: String, //hashed
        require : true
    },
    phone: String,
    role: {
        type: String,
        enum: {
            values: ['admin', 'customer', 'vendor']
        }
    },
    avatar: String,
    isVerified: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: false
    },
    addresses: [{ type : Schema.Types.ObjectId, ref: 'address' }],
    wishlist: [{ type : Schema.Types.ObjectId, ref: 'product' }],

}, { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;