try:
    from RPi import GPIO
except:
    raise Exception("Please run this with a raspberry pi")
import requests

GPIO.setmode(GPIO.BCM)

PIR_PIN_NUMBER = 21

GPIO.setup(PIR_PIN_NUMBER, GPIO.INPUT)

while True:
    i = GPIO.input(PIR_PIN_NUMBER)
    if i == 1:
        print(i)