let dateCurrent = document.querySelector("#currentDay")
let date = moment().format("dddd, MMMM Do");
dateCurrent.textContent = date;

// Save button function
$(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
});

// Function where we use color to indicate the past, present, and future
let timeIndicator = function () {
    // Finds current hour
    var currentHour = moment().hour();

    $(".time-block").each(function () {

        // Pulls hour from id tag within the block
        var blockTime = parseInt($(this).attr("id").split("hour")[1])

        // Add/remove class based on current time and change text box    
        if (blockTime < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if (blockTime === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
};

let loadItems = function() {
    for(let i = 8; i <= 17; i++) {
        $("#hour" +i+ " .description").val(localStorage.getItem("hour" +i));
    };
};

timeIndicator();

loadItems();