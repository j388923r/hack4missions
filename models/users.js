var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('debug', true);

var userSchema = new mongoose.Schema({
	username : { type : String },
	email : { type : String },
	messenger_username : { type : String },
	expertises : [{ type : String }],
	tags : [{ type: String }]
});

userSchema.statics.create = function(username) {
	
};

userSchema.statics.addTag = function(id, tagName) {
	
};

userSchema.statics.addExpertise = function(id, expertise) {
	
};

/* Return all documents from the Users table
 * which match all the tags in the TAGS array. */
userSchema.statics.findByTags = function(tags_list, cb) {
    return this.find({tags: {$all : tags_list}}, cb);
}

var User = mongoose.model('User', userSchema, 'users');

module.exports = User;
