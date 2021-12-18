bluetooth.onBluetoothConnected(function () {
    connected = true
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    connected = false
    basic.showIcon(IconNames.No)
})
let hb = ""
let temp = 0
let connected = false
bluetooth.startUartService()
basic.showIcon(IconNames.SmallSquare)
let counter = 0
basic.forever(function () {
    if (connected == true) {
        bluetooth.uartWriteString("Test:" + counter)
        bluetooth.uartWriteString("Temp" + temp)
    }
})
basic.forever(function () {
    basic.pause(100)
    temp = input.temperature()
})
basic.forever(function () {
    hb = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Fullstop))
    if (hb == "reset") {
        control.reset()
    }
})
