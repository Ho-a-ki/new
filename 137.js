
function printReverse(array) {
    // console.log(array.length);
    i = array.length;
    while (i > 0) {
        console.log(array[i-1]);
        i = i - 1;
    }
}

function isUniform(array) {
    var standard = array[0];
    for (var i = 0; i < array.length; i = i + 1) {
        if (array[i] === standard) {
            standard = array[i];
        } else {
            return false;
        }
    }
    return true;
}

function sumArray(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i = i +1){
        sum = sum + array[i];
    }
    return sum
}

function max(array) {
    var max = 0;
    for(var i = 0; i < array.length; i = i +1){
        if (array[i] > max){
            max = array[i];
        }
    }
    return max
}