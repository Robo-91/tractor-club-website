const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const EventSchema = new Schema(
    {
        description: { type: String, required: true },
        address: { type: String, required: true },
        meeting_date: { type: Date, required: true },
        start: { type: String, required: true },
        end: { type: String, required: true }
    }
);

// Virtual for meeting time format
EventSchema
.virtual('meetupTime')
.get(function () {
    const meetingDate = moment(this.meeting_date).format('dddd, MMMM Do YYYY');
    const startTime = moment(this.meeting_time_start).format('h:mm:ss a');
    const endTime = moment(this.meeting_time_end).format('h:mm:ss a');
    return `${meetingDate}, ${startTime} - ${endTime}`;
});

// Virtual for URL
EventSchema
.virtual('url')
.get(function() {
    return `/calender/${this._id}`;
});

module.exports = mongoose.model('Event', EventSchema);