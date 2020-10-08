const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema(
    {
        album: { type: Schema.Types.ObjectId, ref: 'Album', required: true },
        img: { data: Buffer, contentType: String }
    }
);

// Virtual for Photo's URL
PhotoSchema
.virtual('url')
.get(function () {
    return `/photo/${this._id}`;
});

module.exports = mongoose.model('Photo', PhotoSchema);