let A = 0
input.onButtonPressed(Button.A, function () {
    A = 2
    basic.showNumber(A)
    basic.pause(100)
    for (let index = 0; index < 4; index++) {
        A += 1
        basic.showNumber(A)
    }
})
