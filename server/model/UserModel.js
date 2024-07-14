import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
UserName:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
},
phone:{
    type:String,
    required:false,
},
isAdmin:{
    type:Boolean,
   default:false,
},
role:{
    type: String, enum: ['user', 'librarian'],
    
}
},{
    timestamps:true
});

export default mongoose.model("User",userSchema)