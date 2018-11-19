function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}
var random_tm1 = getRandomInt(3000, 4000);
var random_tm2 = getRandomInt(4000, 5000);
var random_tm3 = getRandomInt(6000, 9000);
var random_tm4 = getRandomInt(9000, 10000);
var random_tm5 = getRandomInt(10000, 13000);
var random_tm6 = getRandomInt(13000, 16000);
var random_tm7 = getRandomInt(16000, 18000);
var random_tm8 = getRandomInt(18000, 20000);

function clickerf() {
   var element = document.getElementById("skip_button");
   if ("click" in element) {
       element.click();
   } else if ("dispatchEvent" in element) {
       var evt = document.createEvent("MouseEvents");
       evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
       element.dispatchEvent(evt);
   }
}
setTimeout(clickerf, random_tm1);
setTimeout(clickerf, random_tm2);
setTimeout(clickerf, random_tm3);
setTimeout(clickerf, random_tm4);
setTimeout(clickerf, random_tm5);
setTimeout(clickerf, random_tm6);
setTimeout(clickerf, random_tm7);
setTimeout(clickerf, random_tm8);
