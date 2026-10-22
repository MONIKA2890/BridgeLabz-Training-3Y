
let userName = "Monika";
let currentHour = new Date().getHours();

// Check the current time and display greeting
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
