var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new mongoose.Schema({
	title : { type : String },
	imageUrl : { type : String },
	link : {type: String},
	description : { type : String },
	tags : [{ type: String }]
});

articleSchema.statics.create = function(title, imageUrl, link, description, tags, callback) {
	var article = new Article({title: title, imageUrl: imageUrl, link: link, description: description, tags: tags});
	article.save(callback);
};

articleSchema.statics.findAll = function(callback) {
	Article.find({}, callback);
};

articleSchema.statics.findById = function(id, callback) {
	Article.findById(id, callback);
}

articleSchema.statics.addTag = function(id, tagName, callback) {
	
};

/* Return all documents from the Users table
 * which match all the tags in the TAGS array. */
articleSchema.statics.findByTag = function(tag, callback) {
    console.log(tag);
    Article.find({ tags : { $in : tag }}, callback);
}

var Article = mongoose.model('Article', articleSchema);


module.exports = Article;
