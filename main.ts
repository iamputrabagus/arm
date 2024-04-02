basic.forever(function () {
    pins.servoWritePin(AnalogPin.P12, 0)
    basic.pause(5000)
    pins.servoWritePin(AnalogPin.P12, 180)
    basic.pause(5000)
})
