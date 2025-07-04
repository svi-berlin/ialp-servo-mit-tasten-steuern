input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    servos.P3.setAngle(min)
    basic.showString("A")
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    servos.P3.setAngle(max)
    basic.showString("B")
})
let max = 0
let min = 0
let start = 70
min = 50
max = 90
basic.showIcon(IconNames.Heart)
basic.setLedColor(0x00ff00)
servos.P3.setAngle(start)
basic.forever(function () {
	
})
