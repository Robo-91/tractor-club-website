const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const AlbumSchema = new Schema(
    {
        event_name: { type: String, required: true },
        date_submitted: { type: Date, required: true },
        photo: { type: Schema.Types.ObjectId, ref: 'Photo', required: true }
    }
);

// Virtual for formatting date
AlbumSchema
.virtual('DateOfEvent')
.get(function() {
    return moment(this.date_submitted).format('MMMM Do YYYY');
});

// Virtual for url
AlbumSchema
.virtual('url')
.get(function () {
    return `/album/${this._id}`;
});

module.exports = mongoose.model('Album', AlbumSchema);