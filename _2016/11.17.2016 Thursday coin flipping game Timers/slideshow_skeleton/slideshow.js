// Slideshow Activity
// Students: follow the instructions below:
// Instructions:

// Unzip the attached file.
// Create a slideshow using jQuery and JavaScript Timing Events.
// Select a few images and make a slideshow.
// Display the "loading.gif" image in between each picture for one second.
// Bonus: Add CSS styling.

$("#stop").on("click", stopSlideshow() );
$("#start").on("click", startSlideshow() );


// TODO: Put links to our images in this image array.
var images = ["car0.jpeg","car1.jpeg","car2.jpeg"];

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.

// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {

  // TODO: Increment the count by 1.
  
  count++;

  // TODO: Show the loading gif in the "image-holder" div.
  var sss = $("#image-holder").html("<img src=" + "loading.gif" + " width='400px'>");

  // TODO: Use a setTimeout to run displayImage after 1 second.
	setTimeout(displayImage,1000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.

}
function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  setTimeout(nextImage,1000);
}
function stopSlideshow() {

  // TODO: Put our clearInterval here:

}

// This will run the display image function as soon as the page loads.
displayImage();
