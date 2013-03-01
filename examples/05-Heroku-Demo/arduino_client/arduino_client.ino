#include <SPI.h>
#include <Ethernet.h>

byte mac[] = { 0x00, 0xAA, 0xBB, 0xCC, 0xDE, 0x02 };
EthernetClient client;
char* heroku_url = "your-heroku-url.herokuapp.com";
int inPin = 3;
int val = 0;
boolean posted = true;

void setup() {
  Serial.begin(9600);
  Serial.println("Connecting");

  pinMode(inPin, INPUT);

  if (Ethernet.begin(mac) == 0) {
    Serial.println("Failed to configure Ethernet using DHCP");
    while(1);
  }
  Serial.println(Ethernet.localIP());
}

void loop() {
  val = digitalRead(inPin);
  if (val == HIGH) {
    if(!posted) {
      Serial.println("Posting!");
      post("/email", "button=true");
      posted = true;
    }
  }

  if (client.available()) {
    char c = client.read();
    Serial.print(c);
  }

  if (!client.connected()) {
    client.stop();
    if (client.connect(heroku_url, 80)) {
      Serial.println("client connected");
      posted = false;
    } else {
      Serial.println("client couldn't connect");
      while(1);
    }
  }
}

void post(String uri, String data) {
  client.print("POST ");
  client.print(uri);
  client.println(" HTTP/1.1");
  client.print("Host: ");
  client.println(heroku_url);
  client.println("Content-Type: application/x-www-form-urlencoded");
  client.println("Connection: close");
  client.print("Content-Length: ");
  client.println(data.length());
  client.println();
  client.print(data);
  client.println();
}

