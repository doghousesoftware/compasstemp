let direction = 0
let temp = 0
input.onButtonPressed(Button.A, function () {
    while (direction) {
        basic.showString("N")
    }
    while (direction < 180) {
        basic.showString("E")
    }
    while (direction < 270) {
        basic.showString("S")
    }
    while (direction < 360) {
        basic.showString("W")
    }
})
input.onButtonPressed(Button.B, function () {
    while (temp >= 70) {
        basic.showIcon(IconNames.Heart)
    }
    basic.showIcon(IconNames.Sad)
})
basic.forever(function () {
    temp = input.temperature() * 9 / 5 + 32
    direction = input.compassHeading()
})
