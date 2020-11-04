const date = new Date();
const month = date.getMonth();
const day = date.getDay();
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const calenderMonth = document.getElementById("month");
const weekDay = Array.from(document.getElementsByClassName("weekday"));

// Output current month
switch (month) {
	case 0:
		calenderMonth.textContent = "January";
		break;
	case 1:
		calenderMonth.textContent = "Febuary";
		break;
	case 2:
		calenderMonth.textContent = "March";
		break;
	case 3:
		calenderMonth.textContent = "April";
		break;
	case 4:
		calenderMonth.textContent = "May";
		break;
	case 5:
		calenderMonth.textContent = "June";
		break;
	case 6:
		calenderMonth.textContent = "July";
		break;
	case 7:
		calenderMonth.textContent = "August";
		break;
	case 8:
		calenderMonth.textContent = "September";
		break;
	case 9:
		calenderMonth.textContent = "October";
		break;
	case 10:
		calenderMonth.textContent = "November";
		break;
	case 11:
		calenderMonth.textContent = "December";
		break;
}

// Dynamic create weekdays
for (let i = 0; i < weekDay.length; i++) {
	weekDay[i].textContent = dayNames[i];
}
