const { Schema, model } = require("mongoose");

const newsletterSchema = Schema({
  user_id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = new model("NewsLetterModel", newsletterSchema);
