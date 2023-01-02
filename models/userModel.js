const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username : {
            type : String,
            required : [true , "Please Provide a username"]
        },
        email : {
            type : String , 
            unique : true ,
            trim : true ,
            match : [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Enter a valid email"
            ]
        },
        password : {
            type : String , 
            required : [true , "enter a valid password "],
            minLength : [6, "password must be up to 6 characters "],
            maxLength : [18, "password must not be more than 18 characters "]
        },
        birthDate : {
            type : String , 
            required : [true , "enter a valid birthDate "],
            default : "18/08/1998"

        },
        adresse : {
            type : String , 
            required : [true , "enter a valid password "],
            default : "Kairouan"
        }
    },
    {
        timestamps : true , 
    }
);

const User = mongoose.model('User',userSchema)
module.exports = User