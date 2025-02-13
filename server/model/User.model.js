import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({

    firstName:{
        type:String,
        required:true,
        min:2,
        max:45,
    },
    lastName:{
        type:String,
        required:true,
        min:2,
        max:45,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:60,
    },
    password:{
        type:String,
        required:true,
        min:4,
    },
    picturePath:{
        type:String,
        default:"",
    },
    friends:{
        type:Array,
        default:[]
    },
    location:String,
    occupation:String,
    viewedProfile:Number,
    impressions:Number,

},
{timestamps:true}
)

const UserModel=mongoose.model("User",UserSchema)

export default UserModel;



