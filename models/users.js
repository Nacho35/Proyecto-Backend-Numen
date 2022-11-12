const { hash } = require("bcrypt-nodejs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  registerDate: {
    type: Date,
    default: Date.now(),
  },
  seriesFav: {
    type: Schema.Types.ObjectId,
    ref: "Serie",
  },
});
userSchema.pre("save", function (next) {
  let user = this;
  bcrypt.genSalt(10, (error, salt) => {
    if (error) {
      return next(error);
    }
    bcrypt.hash(user.password, salt, null, (error, hash) => {
      if (error) {
        return next(error);
      }
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("Users", userSchema);
