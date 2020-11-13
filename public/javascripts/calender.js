const date = new Date();
const year = date.getFullYear();
const currentMonth = date.getMonth();
const weekDay = date.getDay();
const monthNames = [
	"January",
	"Febuary",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
document.getElementById("month").textContent = monthNames[currentMonth];
document.getElementById("year").textContent = year;
const calenderContent = document.getElementById("calender-content");
const daysOfWeek = document.getElementById("days");

for (let i = 1; i <= 31; i++) {
	daysOfWeek.innerHTML += `<div class=${i}>${i}</div>`;
}

// Dynamically create days of the calender.
// Write a function to takes it the year and month. You should be able
// increment/decrement the current month and populate the calender days.
// In the pug page, load in the events and have them inserted into the
// days that they match to. (create element with id associated with day and match up
// the same days)
