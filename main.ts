// clears the screen and then returns the full screen
function TurnonLight () {
    // on function TurnonLight
    selection = randint(0, offlight.length - 1)
    // randomly select one of the numbers in the array
    selection = offlight.removeAt(selection)
    // removes the value from the offlight array
    led.plot(selection % 5, selection / 5)
    // change the random number into a led number and plot it
    onlight.push(selection)
    // put the selected led into the onlight array to keep track of it
    if (offlight.length == 0) {
        // this means all the lights are lit up because their are no more in the array
        basic.clearScreen()
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    TurnonLight()
})
// if button a is pressed called function TurnonLight
// flashes all the lights then clears the screen
function TurnoffLight () {
    selection = onlight.shift()
    // put
    led.unplot(selection % 5, selection / 5)
    offlight.push(selection)
    if (onlight.length == 24) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.clearScreen()
    }
}
// if button a and b are called call reset
input.onButtonPressed(Button.AB, function () {
    reset()
})
// if button b is pressed call turnofflight
input.onButtonPressed(Button.B, function () {
    TurnoffLight()
})
function reset () {
    basic.clearScreen()
    basic.showString("RESET")
    onlight = []
    offlight = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
}
/**
 * if reset is called clear the screen and show the string
 */
/**
 * reset the arrays by putting it to the starting values
 */
/**
 * on light and offlight are myList.shift()
 */
/**
 * on light is empty because there are no lights starting on
 */
/**
 * off light is full because all the lights are off
 */
let selection = 0
let offlight: number[] = []
let onlight: number[] = []
onlight = []
offlight = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
