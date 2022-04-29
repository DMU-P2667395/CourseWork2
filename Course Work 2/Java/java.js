var countDownDate = new Date("Aug 31, 2022 23:59:99").getTime();//the date I want the timer to end at
var x = setInterval(function() {//this sets an interval to update every seconds
  var now = new Date().getTime();//this gets todays date and time
  var distance = countDownDate - now;//calculates time difference between them
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));//to calculate time for days
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));//to calculate time for hours
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));//calculate for minutes
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);//calculate for seconds
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "; // this displays the result in the id
  if (distance < 0) {
    clearInterval(x);
  document.getElementById("countdown").innerHTML = "Webb Is Fully Operational!";//this makes it so if the timer has finished it displays the text
  }
}, 1000);//this is the end of the setinterval function
