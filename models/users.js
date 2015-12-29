var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	id : mongoose.Schema.
	username : { type : String },
	expertises : [{ type : String }]
});

userSchema.statics.create = function(username) {
	
};

