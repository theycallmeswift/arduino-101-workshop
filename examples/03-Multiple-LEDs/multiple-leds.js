var five = require("johnny-five")
  , board = new five.Board();

board.on("ready", function() {
  var leds = []
    , led;

  for(var i = 2; i <= 9; i++) {
    led = new five.Led(i);
    led.strobe(500);
    leds.push(led);
  }

  board.repl.inject({
    leds: leds
  });
});
