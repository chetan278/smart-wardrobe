pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.servoWritePin(AnalogPin.P7, 180)
let door = -1
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        door = door * -1
        if (door == 1) {
            neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB).range(0, 1).showColor(neopixel.colors(NeoPixelColors.White))
            pins.servoWritePin(AnalogPin.P7, 0)
            basic.pause(2000)
        } else {
            pins.servoWritePin(AnalogPin.P7, 180)
            basic.pause(2000)
            neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB).range(0, 1).showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
})
