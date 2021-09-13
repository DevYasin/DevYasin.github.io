var timeStart = new Date("Dec 26, 2021 00:00:00").getTime()

   // Run myfunc every second
var myfunc = setInterval(() => {

   var now = new Date().getTime();
   var timeleft = timeStart - now ;
   
   var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
   var hour=Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))<10 ? `0${Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}` : Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))<10 ? `0${Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))}`: Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((timeleft % (1000 * 60)) / 1000)<10 ? `0${Math.floor((timeleft % (1000 * 60)) / 1000)}` : Math.floor((timeleft % (1000 * 60)) / 1000);
   // Result is output to the specific element
   document.querySelector(".days").innerHTML = days
   document.querySelector(".hours").innerHTML = hour
   document.querySelector(".mins").innerHTML = mins
   document.querySelector(".secs").innerHTML = secs
       
   // Display the message when countdown is over
   if (timeleft < 0) {
       clearInterval(myfunc);
       document.getElementById("days").innerHTML = ""
       document.getElementById("hours").innerHTML = "" 
       document.getElementById("mins").innerHTML = ""
       document.getElementById("secs").innerHTML = ""
   }
   }, 1000);