var five = require("johnny-five")
  , board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);

  board.repl.inject({
    led: led
  });

  led.on();
});
