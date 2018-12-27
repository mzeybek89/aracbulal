const  mongoose = require('mongoose');

const Tag = mongoose.model('Tag', {
    tag:{
        type: String,
        required:true,
        unique:true
    },
    count:{
        type:Number,
        default:0,
        required: true
    }
});

module.exports = Tag;