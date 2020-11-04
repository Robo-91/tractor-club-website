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
