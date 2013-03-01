require 'bundler/setup'
require 'dino'

board = Dino::Board.new(Dino::TxRx.new)
button = Dino::Components::Button.new(pin: 8, board: board)

button.up do
  puts "Button Pressed"
end

sleep
