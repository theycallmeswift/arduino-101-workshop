var five = require("johnny-five")
  , board = new five.Board();

board.on("ready", function() {
  var buzz = new five.Led(9);

  board.repl.inject({
    buzz: buzz
  });

  buzz.on();
});
