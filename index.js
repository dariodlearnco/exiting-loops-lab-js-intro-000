function breakOut(array, changeValue, stopValue) {
    // Iterates through `array` and changes every element to `changeValue`
    // until the loop reaches `stopValue`. Then we `break` out of the loop and
    // return the array.

    for (var i=0; i < array.length; i++) {
        if (array[i] === stopValue) {
            break
        }
        array[i] = changeValue
    }
    return array
}
