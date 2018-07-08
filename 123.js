// let's think that what is the return value?

var num = 0;
function doMath() {
    num += 1;
    if (num % 5 === 0) {
        return true
    } else {
        return false
    }
}

num += 1 ;

doMath()