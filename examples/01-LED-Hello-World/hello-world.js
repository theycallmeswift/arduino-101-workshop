var five = require("johnny-five")
  , board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13)
    , on = false;

  board.repl.inject({
    led: led
  });

  setInterval(function() {
    if(on) {
      led.off();
      on = false;
    } else {
      led.on();
      on = true;
    }
  }, 500);
});
