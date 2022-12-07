let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
let tira2 = neopixel.create(DigitalPin.P1, 300, NeoPixelMode.RGB)
strip.clear()
tira2.clear()
basic.forever(function () {
    strip.setPixelColor(10, neopixel.rgb(255, 10, 0))
    strip.setBrightness(randint(25, 255))
    strip.show()
    basic.pause(randint(0, 150))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Black))
    strip.show()
    basic.pause(randint(0, 150))
})
basic.forever(function () {
	
})
