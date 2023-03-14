radio.onReceivedString(function (receivedString) {
    if (receivedString == "C") {
        OLED.clear()
        OLED.writeStringNewLine("You Pressed C")
    }
    if (receivedString == "D") {
        OLED.clear()
        OLED.writeStringNewLine("You Pressed D")
    }
    if (receivedString == "E") {
        OLED.clear()
        OLED.writeStringNewLine("You Pressed E")
    }
    if (receivedString == "F") {
        OLED.clear()
        OLED.writeStringNewLine("You Pressed F")
    }
})
OLED.init(128, 64)
basic.showIcon(IconNames.Yes)
basic.showString("R")
