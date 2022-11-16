const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
UserSchema.pre("save", function (next) {
  let User = this;
  bcrypt.genSalt(10, (error, salt) => {
    if (error) {
      return next(error);
    }
    bcrypt.hash(User.password, salt, null, (error, hash) => {
      if (error) {
        return next(error);
      }
      User.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);
