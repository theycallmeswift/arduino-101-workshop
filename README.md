# Intro

This repo contains everything you'll need to know about getting started with
Arduino for the [SendGrid](http://sendgrid.com) Workshop at
[DotJS](http://dotjs.eu).

## What do I need?

What do you need for this workshop?

 - A Mac or Linux laptop running Node 0.8.x
 - The Arduino IDE
 - An Arduino Uno

## What is an Arduino?

An [Arduino](http://arduino.cc) is a little open source microcontroller that
let's you rapidly prototype with various hardware components.  Some of the
components you'll be interacting with during this workshop are LEDs, buttons,
and buzzers.  These are just basic pieces and down the road you'll be able to
interact with more complex systems (like GPS or a motor).

More specifically speaking, we're going to be using an Ardunio Uno R3 for this
workshop.

## Node.js + Arduino

If you want to write code that runs on your Arduino without the help of your
computer, you're going to need to write in the Arduino specific language.  It's
pretty similar to C, C++, or Processing.  But we're Javascript hackers!  So in
light of that fact, we're going to use Node.JS to talk to our Arduino and
interact with some components.  So how do we do that?

### Firmata

Firmata is a generic protocol for communicating with a microcontroller using
software on a computer.  You can think of it like an API for talking to
Arduinos.

There are implementations of Firmata in a bunch of languages and flashing it on
to our Arduino is super easy using the Arduino IDE.

#### Step 0. Download and open the Arduino IDE

If you don't already have the latest Ardunio IDE, you can download it from the
main Arudino Software page
([http://arduino.cc/en/Main/Software](http://arduino.cc/en/Main/Software)).
Once you download it, you should open it up.

#### Step 1. Connect your Arudino to your computer

Take out the Arduino Uno and USB cable that came with your starter kit.  You
should connect the USB to your computer and then plug in the Arduino.  If
everything is working properly, you should see the board light up.

#### Step 2. Open and upload the StandardFirmata sketch

Once you have the editor open, you should open `File` > `Examples` > `Firmata`
and click on "StandardFirmata".  This will open up a new sketch window.  You can
click the green arrow on the window to upload it to your Arduino.

### Johnny-five

![https://github.com/rwldrn/johnny-five/raw/master/assets/sgier-johnny-five.png](https://github.com/rwldrn/johnny-five/raw/master/assets/sgier-johnny-five.png)

Johnny-five is the secret sauce, magic glue Node.js module (written by [Rick Waldron](https://twitter.com/rwaldron))
that's going to be helping us talk to our Arduino.  You can find it on Github at
the link below.  There are *tons* of awesome tutorials in there, so I highly
recommend referring to it regularly.

 > https://github.com/rwldrn/johnny-five

Just like any other NPM package, we need to install johnny-five so we can use
it.  Most people are going to want to create a new directory to keep all the
stuff we make today in, but if you want to install things globally, go for it.

    npm install johnny-five

Johnny-five (JF) gives us a really nice API for talking with the board.  Let's
take a look at a basic program:

    var five = require("johnny-five")
      , board = new five.Board();

    board.on("ready", function() {
      // Create an Led on pin 13 and strobe it on/off
      // Optionally set the speed; defaults to 100ms
      (new five.Led(13)).strobe();
    });

Look ma! No magic.  Just like every other node program we've come to know and
love :)

Someone (probably Rick) drew a pretty awesome diagram
explaining the layers of the Firmata + Johnny-five setup.  If you're interested,
you should definitely check it out: [http://gul.ly/dbp](http://gul.ly/dbp).

## What's in your kit?

 - 1 x Arduino Uno
 - 1 x Solderless Breadboard
 - 1 x USB cable
 - 140 x Various Sized Wires

 - 5 x Push Buttons
 - 5 x Multicolor LEDs
 - 1 x Photoresistor
 - 1 x Variable Resistance Potentiometer
 - 1 x Thermistor
 - 1 x Piezo Element
 - 10 x 220 Ohm Resistors
 - 15 x Resistors (Other)

 - 1 x LED Strip
 - 13 x Capacitors (5 x 10nF, 5 x 100nF, 3 x 100uF)
 - 1 x Diode
 - 40 x Breakable Header Pins
 - 2 x Transistors (NPN)
 - 1 x Transistor (MOSFET)
 - 2 x Opto-isolators
