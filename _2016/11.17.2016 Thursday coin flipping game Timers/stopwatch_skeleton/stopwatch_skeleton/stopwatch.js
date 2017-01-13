//  Interval Exercise (follow the instructions below).

//  This code will run as soon as the page loads.
window.onload = function() {

  //  Click events are done for us:
  $("#lap").click(stopwatch.recordLap);
  $("#stop").click(stopwatch.stop);
  $("#reset").click(stopwatch.reset);
  $("#start").click(stopwatch.start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var myWatch;

//  Our stopwatch object.
var stopwatch = {

  time: 0,
  lap: 1,

  reset: function() {
    console.log("reset");
    stopwatch.time = 0;
    stopwatch.lap = 1;

    //this.time = 0;
    //this.lap = 1;
    //  TODO: Change the "display" div to "00:00."

  },

  start: function() {
    console.log("start");
    //  TODO: Use setInterval to start the count here.
    myWatch = setInterval(stopwatch.count, 1000);

  },
  stop: function() {
console.log("stop");
    //  TODO: Use clearInterval to stop the count here.
    clearInterval(myWatch);

  },

  recordLap: function() {
      console.log("record lap");
      //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
      //        and save the result in a variable.
      var l_time = stopwatch.time;
      var result = stopwatch.timeConverter(l_time);

      //  TODO: Add the current lap and time to the "laps" div.
      //$("#laps").html("lap: " + result);
      //var newDiv = $('<div>');
      //newDiv.html('lap: ' + result);

      var newDiv = $('<div>');
      newDiv.html("lap: " + result);
      $('#laps').append(newDiv );




      //  TODO: Increment lap by 1. Remember, we can't use "this" here.
  },
  count: function() {
      console.log("count");
    //stopwatch.time++;
    //console.log(stopwatch.time);

    stopwatch.time++;
    console.log(stopwatch.time);

    //  TODO: increment time by 1, remember we cant use "this" here.

    //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
    //        and save the result in a variable.

    //  TODO: Use the variable you just created to show the converted time in the "display" div.

  },

  //  THIS FUNCTION IS DONE FOR US!
  //  We do not need to touch it.

  timeConverter: function(t) {
    console.log("convert");
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};
