
const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://tusharthakre800:tusharthakre800@tushar01.r059i.mongodb.net/`)


const useraSchema  = mongoose.Schema({
    username : String,
    name : String,
    age : Number,
    email : String,
    password : String,
    profilepic:{
        type:String,
        default:"default.png"
    },
    post:[
        {type:mongoose.Schema.Types.ObjectId,ref:"post"}
    ]
})

module.exports = mongoose.model("user",useraSchema)