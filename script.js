let timeSec = document.querySelectorAll(`[class*="time-block"]`);
let headTimer = document.querySelector('#currentDay')
let saveButt = document.getElementsByClassName('saveBtn')

let block9 = $('#hour-9')
let block10 = $('#hour-10')
let block11 = $('#hour-11')
let block12 = $('#hour-12')
let block1 = $('#hour-13')
let block2 = $('#hour-14')
let block3 = $('#hour-15')
let block4 = $('#hour-16')
let block5 = $('#hour-17')

let scheduleArr = [
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

// loop through the times and set the class to set the color, checking if i can set localstorage while looping through if i saved the content as the div id
function setCalColor (){
  for (let index = 0; index < scheduleArr.length; index++) {
    var x = scheduleArr[index].get(0)
    let time_now = dayjs().format('H')
    blockCol = scheduleArr[index].data('hour')
    // console.log(x)
    // console.log(time_now)
    // console.log(blockCol)
    // if i set them all as future by default would i only have to loop until i reach the present?
    if (blockCol < Number(time_now)){ //in the past
        x.classList.add("past")      
    } else if(blockCol === Number(time_now)){
      x.classList.add("present")
    } else{   
      x.classList.add("future")
    }
  }
}

function setTextCont(){
  for (let z = 0; z < scheduleArr.length; z++) {
    // console.log(z)
    t = `scheduleArr[${z}]`
    StoredCont = localStorage.getItem(t)
    console.log(StoredCont)
    a = scheduleArr[z][0].children[1]
    a.value = StoredCont
  }
  // for (let index = 0; index < scheduleArr.length; index++)
  //   z = index
    // t = `scheduleArr[${z-8}]`
    // var StoredCont = localStorage.getItem(t)
    // a = scheduleArr[i][0].children[1]
    // a.value(StoredCont)
    
    // console.log(a)

}

// just get the time and format it then put on top of the page
function current_time(){
  let today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY')); 
}

function saveClick () {
  var parent = $(this).closest('.time-block').data('hour')
  var storeThis = $(this).closest('.time-block')[0].children[1].value
  localStorage.setItem(`scheduleArr[${parent - 9}]`, storeThis)
}


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
for (let index = 0; index < saveButt.length; index++) { 
  const element = saveButt[index];
  element.addEventListener("click", saveClick) 
}

$(function () {
  current_time()
  setCalColor()
  setTextCont()
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


