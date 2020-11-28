bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # . . .
        . # # # .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        . . . # .
        . . . # .
        . # # # .
        . # . # .
        . # # # .
        `)
})
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startLEDService()
bluetooth.startTemperatureService()
bluetooth.startIOPinService()
bluetooth.startMagnetometerService()
led.setBrightness(32)
basic.showLeds(`
    . . . . .
    . . # . .
    . . . . .
    . # . # .
    . . . . .
    `)
