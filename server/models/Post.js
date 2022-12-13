const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reaction',
      
    }
  ]

});

const Post = model('Post', postSchema);

module.exports = Post;
