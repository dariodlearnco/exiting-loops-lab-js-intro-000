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

function keepGoing(array, changeValue, skipValue) {

    // Iterates through `array` and changes every element to `changeValue`
    // except those that match `skipValue`. Then return the array.

    for (var i=0; i < array.length; i++) {
        if (array[i] === skipValue) {
            continue
        }
        array[i] = changeValue
    }
    return array
}
