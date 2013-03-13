#! /usr/bin/env python
from BreakfastSerial import Button, Arduino

board = Arduino()
button = Button(board, 7)

def down_cb():
  print "button down"

def up_cb():
  print "button up"

button.down(down_cb)
button.up(up_cb)

# Run an interactive shell so you can play (not required)
import code
code.InteractiveConsole(locals=globals()).interact()
