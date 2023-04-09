// display current time?
var dateDisplayEl = document.querySelector("#date-Display")
//makes the clock tick
setInterval (function () {
    dateDisplayEl.textContent = (moment().format('ddd, MMM Do YYYY, h:mm:ss a'));
}, 1000)

var currentTime = moment().hour();
console.log(currentTime);


// cycling through the colors past present future:
//we can use the .split to target the id hour
function colorBlocks() {
  var goTime = Number(moment().hour());
  $(".time-block").each(function () {
    // var textHour = $(this).parent().attr("id");
    var textHour = Number($(this).attr("id"));
    console.log(textHour, goTime);

    // we need a lessthan; equalTo; and else

    if (textHour < goTime) {
      $(this).find(".description").addClass("past");
    } else if (textHour === goTime) {
      $(this).find(".description").addClass("present");
      // default to future
    } else {
      $(this).find(".description").addClass("future");
    }
    return textHour
  }); 
}



// Local Storage:
// .each controls content inside () ; we are in charge of content in {}
$(".saveBtn").each(function (i, btn) {
    $(btn).on("click",function (){
        // we want to grab the info in textarea and not the actual button
        var value = $(this).siblings(".description").val();
        var key = $(this).parent().attr("id");
        localStorage.setItem(key,value)
    })
});

// loop through all textareas
$(".saveBtn").each(function (i, btn) {
    var key = $(btn).parent().attr("id");
    var value = localStorage.getItem(key);
    var textArea= $(this).siblings(".description");
    textArea.val(value);
});

colorBlocks()

// how to clear local browser when tab is closed:


// NOTES & prior code section:
// saveBtn Local Storage? 
// add onClick & annon function to localStorage.setItem (key,value). I need the key and value defined
// $(".saveBtn").on("click", function () {
//     var key = $(this).parent().attr("id").split("-")[1];
//   var value = $(this).parent().find(".description").val();
//   localStorage.setItem(key,value)
// });
