const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
  comment: {
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
});

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;
