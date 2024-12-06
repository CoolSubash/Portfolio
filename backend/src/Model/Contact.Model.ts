import mongoose from "mongoose";

const ContactSchema=new mongoose.Schema({
  
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    comment:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true
})

const ContactModel = mongoose.model("Contact", ContactSchema);

export default ContactModel;
