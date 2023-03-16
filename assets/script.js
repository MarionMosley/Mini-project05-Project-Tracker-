// Displays and updates current time !! Missing "at" !!
function updateTime() {
    var currentTime = dayjs().format('MMM DD, YYYY hh:mm:ss a');
    $('#time').text(currentTime);
}

setInterval(updateTime, 1000);

// dropdown select menu for Project Type
$( function() {
    $( "#project-type" ).selectmenu();
  } );

  
// Datepicker
$( function() {
    $( "#datepicker" ).datepicker();
  } );