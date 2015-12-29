var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	id : mongoose.Schema.
	username : { type : String },
	expertises : [{ type : String }],
	tags : [{ type: String }]
});

userSchema.statics.create = function(username) {
	
};

userSchema.statics.addTag = function(id, tagName) {
	
};

userSchema.statics.addExpertise = function(id, expertise) {
	
};