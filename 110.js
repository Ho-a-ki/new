
var asking;

asking = prompt("Are you in THERE?");

// while (asking !== "YES" && asking !=="YEAH" ) {
//     asking = prompt("Are you in THERE?");
// }

while (asking.indexOf("YES") === -1) {
    asking = prompt("Are you in THERE?");
}

alert("YAY, WE MADE IT~!");
