var mongoose = require("mongoose");
var passportLocalMongoose =require("passport-local-mongoose");

mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    username            : String,
    password            : String,
    email               : {type: String, unique: true, require: true},
    isAdmin             : {type: Boolean, default: false},
    resetPasswordToken  : String,
    resetPasswordExpires: Date,
    ap                  : {type: Number, default: 0},
    seeds: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref : "Seed" ,
                    quantity: {type: Number , default: 0}
                }
            ],
    animals: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Animal",
                    quantity: {type: Number , default: 0}
                }
            ],
    trees: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Tree",
                    quantity: {type: Number , default: 0}
                }
            ],
    upgrades: [
                    {
                       type: mongoose.Schema.Types.ObjectId,
                       ref: "Upgrade",
                       quantity: {type: Number , default: 0}
                    }
                ],
    expansions: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Expansion",
                        quantity: {type: Number , default: 0}
                    }
                ],
    gems:   [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Gem",
                    quantity: {type: Number , default: 0}
                }
            ],
    expBoosts : [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "ExpBoost",
                        quantity: {type: Number , default: 0}
                    }
                ]
});


UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);

