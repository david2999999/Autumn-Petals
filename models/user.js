var mongoose = require("mongoose");
var passportLocalMongoose =require("passport-local-mongoose");

mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: {type: String, unique: true, require: true},
    isAdmin: {type: Boolean, default: false},
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    ap: Number
    // crop: [
    //          {
    //             type: mongoose.Schema.Type.ObjectId,
    //             ref : "Crop" 
    //         }
    //     ],
    // animal: [
    //             {
    //                 type: mongoose.Schema.Type.ObjectId,
    //                 ref: "Animal"
    //             }
    //         ]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);

