
var timeSec = document.querySelectorAll(`[class*="time-block"]`);
var headTimer = document.querySelector('#currentDay')

var block9 = $('#hour-9')
var block10 = $('#hour-10')
var block11 = $('#hour-11')
var block12 = $('#hour-12')
var block1 = $('#hour-13')
var block2 = $('#hour-14')
var block3 = $('#hour-15')
var block4 = $('#hour-16')
var block5 = $('#hour-17')

var scheduleArr = [
  block9,
  block10,
  block11,
  block12,
  block1,
  block2,
  block3,
  block4,
  block5,
]
for (let index = 0; index < scheduleArr.length; index++) {
  var childText = scheduleArr[index].children().first().text()
  console.log(childText)
  var time_now = dayjs().format('hA')
  console.log(time_now)
  childText.diff(time_now,'hour')
  
}
console.log()

function current_time(){
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY')); 
}

// make a function that finds out what color they need to be, if theres a way to target later ids without looping maybe, but will probably end up just using the textcontent thats set to its time comparing it to the current time 
function Color_cal(){


}
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
current_time()