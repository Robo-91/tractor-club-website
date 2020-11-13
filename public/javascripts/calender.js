const date = new Date();
const year = date.getFullYear();
const currentMonth = date.getMonth();
const weekDay = date.getDay();
const lastDayCurMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
const lastDayPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0);
const firstDayNextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
console.log(
	lastDayCurMonth.getDate(),
	lastDayPrevMonth,
	firstDayNextMonth.getDate()
);
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

// Render Days of Current Month
for (let i = 1; i <= lastDayCurMonth.getDate(); i++) {
	daysOfWeek.innerHTML += `<div class=${i}>${i}</div>`;
}

// Render Days of Next Month
// for (let j = 1; j < firstDayNextMonth.getDate(); j++) {
// 	console.log(firstDayNextMonth);
// }
