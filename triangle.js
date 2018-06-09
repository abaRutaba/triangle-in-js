//right triangle
function lTriangle(rows) {
    console.log("left trianlge");
    for (var i = 1; i <= rows; i++) {
        var output = "";
        for (var j = i; j >= 1; j--) {
            output += "*";
        }
        console.log(output);
    }
}
lTriangle(5);
//Simple triangle
function triangle(rows) {
    console.log("Simple trianlge");
    for (var x = 1; x <= rows; x++) {
        var output = "";
        for (var y = rows; y - x >= 1; y--) {
            output += " ";
        }
        for (var z = x; z >= 1; z--) {
            output += " *";
        }
        console.log(output);
    }
}
triangle(5);
function rTriangle(rows) {
    console.log("right triangle");
    for (var i = 1; i <= rows; i++) {
        var output = "";
        for (var j = 1; j <= rows - i; j++) {
            output += " ";
        }
        for (var k = 1; k <= i; k++) {
            output += "*";
        }
        console.log(output);
    }
}
rTriangle(5);
