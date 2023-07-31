const { Schema, mongoose } = require('mongoose');

const blogPostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
    currentTime: {
      type: Date,
      default: Date.now, // Set the default value to the current timestamp when a new record is created
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model('blogPost', blogPostSchema);
