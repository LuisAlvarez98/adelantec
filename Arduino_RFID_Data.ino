
#include "SPI.h" 
#include "MFRC522.h" 
#include <avr/wdt.h>
#include "SerialTransfer.h"

SerialTransfer myTransfer;

const int pinRST = 9;
const int pinSDA = 10;
String stringOne = "Prueba";
String currentRFC = "";
MFRC522 mfrc522(pinSDA, pinRST); 

void setup() {
  SPI.begin(); 
  mfrc522.PCD_Init(); 
  Serial.begin(9600); 
  
  Serial.begin(115200);
  myTransfer.begin(Serial);

 
}

void(* resetFunc) (void) = 0; //declare reset function @ address 0


void loop() {
  
  if (mfrc522.PICC_IsNewCardPresent() && stringOne != "RFID TAG ID:") { 
    if(mfrc522.PICC_ReadCardSerial()) { // true, if RFID tag/card was read
      stringOne = "RFID TAG ID:";
      Serial.print(stringOne);
      for (byte i = 0; i < mfrc522.uid.size; ++i) { // read id (in parts)
        //Serial.print(mfrc522.uid.uidByte[i], HEX); // print id as hex values
        currentRFC.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
        currentRFC.concat(String(mfrc522.uid.uidByte[i], HEX));  
        
        Serial.print(" "); // add space between hex blocks to increase readability
      }
         for (int i = 0 ;i<currentRFC.length();i++){
                 myTransfer.packet.txBuff[i] = currentRFC[i];
          }
          
          myTransfer.sendData(currentRFC.length());
          delay(5000);    
        Serial.println();// wait for a second


           resetFunc();  //call reset
         
      
      
  
      
    Serial.println(); // Print out of id is complete.
    }
  }
}
