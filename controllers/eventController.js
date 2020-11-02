const Event = require("../models/events");
const { body, validationResult } = require("express-validator");
const { NotExtended } = require("http-errors");
// const { isDate } = require('moment');

// Calender Page - Event List
exports.calender = async (req, res, next) => {
	const currentDate = new Date();
	const currentMonth = currentDate.getMonth();
	try {
		const events = await Event.find({});
		const currentMonthEvents = events.filter((event) => {
			return event.meeting_date.getMonth() === currentMonth;
		});
		res
			.status(200)
			.render("calender", {
				title: "Calender Page",
				currentMonthEvents,
				currentDate,
			});
	} catch (e) {
		res.status(500).send();
	}
};

// Display detail page of specific event
exports.event_detail = (req, res, next) => {
	Event.findById(req.params.id).exec(function (err, event) {
		if (err) {
			return next(err);
		}
		if (event === null) {
			const err = new Error("Event does not exist");
			err.status = 404;
			return next(err);
		}
		// Successful, render
		res.render("event_detail", { title: "Event Details", event: event });
	});
};

// Display Event Create Form - GET
exports.event_create_get = (req, res, next) => {
	res.render("event_form", { title: "Create New Event" });
};

// Handle Event Create - POST
exports.event_create_post = [
	// Validate & sanitize fields
	body("description", "Please Include a Description!").trim().escape(),
	body("address", "Please provide and address!").trim().escape(),
	body("meeting-date", "Please provide an Event meeting date").trim().escape(),
	body("start", "Please include a start time").trim().escape(),
	body("end", "Please include when the event is over").trim().escape(),
	// Process after validation
	(req, res, next) => {
		const errors = validationResult(req);
		// Create New Event Object
		const event = new Event({
			description: req.body.description,
			address: req.body.address,
			meeting_date: req.body.meeting_date,
			start: req.body.start.toString(),
			end: req.body.end.toString(),
		});
		if (!errors.isEmpty()) {
			// There are errors
			res.render("event_form", {
				title: "Create New Event",
				event: event,
				errors: errors.array(),
			});
			return;
		} else {
			// fields are valid! Ensure there are no duplicates
			Event.findOne({ address: req.body.address }).exec(function (
				err,
				found_event
			) {
				if (err) {
					return next(err);
				}
				if (found_event) {
					res.redirect(found_event.url);
				} else {
					event.save(function (err) {
						if (err) {
							return next(err);
						}
						res.render("event_detail", { title: "Event Detail", event: event });
					});
				}
			});
		}
	},
];

// Display Event Delete - GET
exports.event_delete_get = (req, res, next) => {
	Event.findById(req.params.id).exec(function (err, event) {
		if (err) {
			return next(err);
		}
		if (event === null) {
			res.redirect("/calender");
		}
		// Successful
		res.render("event_delete", { title: "Delete Event", event: event });
	});
};

// Handle Event Delete - POST
exports.event_delete_post = (req, res, next) => {
	Event.findByIdAndRemove(req.body.id, function deleteEvent(err) {
		if (err) {
			return next(err);
		}
		// Success
		res.redirect("/calender");
	});
};

// Display Event Update - GET
exports.event_update_get = (req, res, next) => {
	Event.findById(req.params.id, function (err, event) {
		if (err) {
			return next(err);
		}
		if (event === null) {
			const err = new Error("Event not Found");
			err.status = 404;
			return next(err);
		}
		// Success
		res.render("event_form", { title: "Update Event", event: event });
	});
};

// Handle Event Update - POST
exports.event_update_post = [
	// Validate & sanitize fields
	body("description").notEmpty().trim().escape().isLength({ min: 2 }),
	body("address").notEmpty().trim().escape(),
	body("meeting-date").notEmpty(),
	body("start-time").notEmpty().escape(),
	body("end-time").notEmpty().escape(),
	// Process after validation
	(req, res, next) => {
		const errors = validationResult(req);
		// Create Event object
		const event = new Event({
			description: req.body.description,
			address: req.body.address,
			meeting_date: req.body.meeting_date,
			meeting_start_time: req.body.meeting_start_time,
			meeting_end_time: req.body.meeting_end_time,
			_id: req.params.id,
		});
		if (!errors.isEmpty()) {
			// Errors, render form again and fix
			res.render("event_form", {
				title: "Update Event",
				event: event,
				errors: errors.array(),
			});
			return;
		} else {
			// Valid, find item by id and update
			Event.findByIdAndUpdate(req.params.id, event, {}, function (
				err,
				theEvent
			) {
				if (err) {
					return next(err);
				}
				// Successful, redirect to detail page
				res.redirect(theEvent.url);
			});
		}
	},
];
