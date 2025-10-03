import mongoose from "mongoose";
const {Schema}  = mongoose;

const addressSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    fullName : {
        type : String,
        require : true
    },
    phone : {
        type : String,
        require : true
    },
    addressLine1 : String,
    addressLine2 : String,
    city : String,
    state : String,
    country : String,
    zipCode : String,
    isDefault :  Boolean,
    addressType : {
        enum : {
            type : String,
            values: ['home' , 'office' , 'other']
        } 
    }
} , {timestamps : true})

const Address =  mongoose.model('Address' , addressSchema);

export default Address;