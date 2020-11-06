const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const monthNames = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"June",
	"July",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec",
];
const calenderMonth = document.getElementById("month");
const calenderYear = document.getElementById("year");
const calenderContent = document.getElementById("calender-content");

// Dynamically create days of the calender.
// Write a function to takes it the year and month. You should be able
// increment/decrement the current month and populate the calender days.
// In the pug page, load in the events and have them inserted into the
// days that they match to. (create element with id associated with day and match up
// the same days)
