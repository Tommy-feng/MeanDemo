var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArticleSchema;
ArticleSchema = new Schema({
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title canot be blank'
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Article', ArticleSchema);