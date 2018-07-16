
var colors = ['red', 'orange', 'green', 'yellow'];

var i = 'hello'
// so we have to console.log all of this value of colors.
// for iteration array, you have to use this way.
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
    // alert(colors[i]);
}

console.log(i)

// for this, you have to know about 'for each' !

colors.forEach(function(i){
    console.log(i);
})

function printColor(color) {
    console.log("************")
    console.log(color)
    console.log("************")
}

colors.forEach(printColor);

// 아직까지 for 문 쓰는거에 익숙치가 않아서 그냥 for를 쓰는것도
// 나쁘지 않아보이긴 해.