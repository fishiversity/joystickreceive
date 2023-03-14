radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        OLED.clear()
        OLED.writeStringNewLine("You pressed A")
    }
    if (receivedNumber == 1) {
        OLED.clear()
        OLED.writeStringNewLine("You pressed B")
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "C") {
        OLED.clear()
        OLED.writeStringNewLine("LEFT")
    }
    if (receivedString == "D") {
        OLED.clear()
        OLED.writeStringNewLine("UP")
    }
    if (receivedString == "E") {
        OLED.clear()
        OLED.writeStringNewLine("DOWN")
    }
    if (receivedString == "F") {
        OLED.clear()
        OLED.writeStringNewLine("RIGHT")
    }
})
OLED.init(128, 64)
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.showString("R")
