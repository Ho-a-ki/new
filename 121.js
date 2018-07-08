
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else return false
}

function factorial(number) {
    var answer = 1
    while (number > 1){
        answer = answer * number
        number = number -1
    }
    return answer
}

function kebabToSnake(string) {
    while (string.indexOf("-") !== -1){
        string = string.replace("-","_")
    }
    return string
}