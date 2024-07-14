import mongoose from "mongoose";
const {Schema} = mongoose;

const BookSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
BookName:{
    type:String,
    required:true,
    
},
img:{
    type:String,
    required:false,
},
RentPrice:{
    type:Number,
    required:true,
},
Category:{
    type:String,
}
,
Desc:{
    type:String,
    required:false,
},
author:{
    type:String,
    required:false,
},
LibrarianId:{
    type:String,
    required:true,
},
ISBN_no:{
    type:Number,
    required:true,
}
},{
    timestamps:true
});

export default mongoose.model("Product",BookSchema)