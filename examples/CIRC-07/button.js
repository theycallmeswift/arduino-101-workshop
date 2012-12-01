var five = require("johnny-five")
  , board = new five.Board();

board.on("ready", function() {
  var button = new five.Button(7);

  board.repl.inject({
    button: button
  });

  button.on("up", function() {
    console.log("Button Pressed");
  });
});
