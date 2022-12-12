const { Schema, model } = require('mongoose');

const techSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Tech = model('Tech', techSchema);

module.exports = Tech;
