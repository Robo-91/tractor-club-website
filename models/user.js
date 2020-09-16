const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: { type: String, required: true, minlength: 1 },
        password: { type: String, required: true, minlength: 1 }
    }
);

module.exports = mongoose.model('User', UserSchema);