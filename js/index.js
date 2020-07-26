// alert("Assignment of js")


// qustion 1 ans

var N1 = 18;
var N2 = 6;

document.getElementById("ans1").innerHTML = "1.  Add  " + " = " + (N1 + N2);
document.getElementById("ans2").innerHTML = "2.  subtract " + " = " + (N1 - N2);
document.getElementById("ans3").innerHTML = "3.  Multiply " + " = " + (N1 * N2);
document.getElementById("ans4").innerHTML = "4.  Divide " + " = " + (N1 / N2);
document.getElementById("ans5").innerHTML = "5.  Remainder of division " + " = " + (N1 % N2);
document.getElementById("ans6").innerHTML = "6.  Increment operator " + " = " + (N1++);
document.getElementById("ans7").innerHTML = "7.  Decrement operator  " + " = " + (N2--);


// Second Qustion Ans

var x = 20;
var y = 10;
var z = 15;

document.getElementById("ans_1").innerHTML = " Bigger number is " + (x > y ? (x > z ? x : z) : (y > z ? y : z));


// Third Wustion Ans

var M = 50;
var N = 10;

M = M + N;
N = M - N;
M = M - N;

document.getElementById("ans_2").innerHTML = (" M " + " = " + M);
document.getElementById("ans_3").innerHTML = (" N " + " = " + N);


// Fourth Wustion Ans

var swapAns = function (a, b) {
    var a = a + b;
    var b = a - b;
    var a = a - b;
    return {
        a,
        b
    };
}
var nweSwap = swapAns(10, 90);
document.getElementById("ans_4").innerHTML = ("M " + " = " + nweSwap.a);
document.getElementById("ans_5").innerHTML = ("N " + " = " + nweSwap.b);

var nweSwap = swapAns(20, 80);
document.getElementById("ans_6").innerHTML = ("M " + " = " + nweSwap.a);
document.getElementById("ans_7").innerHTML = ("N " + " = " + nweSwap.b);

var nweSwap = swapAns(30, 70);
document.getElementById("ans_8").innerHTML = ("M " + " = " + nweSwap.a);
document.getElementById("ans_9").innerHTML = ("N " + " = " + nweSwap.b);

var nweSwap = swapAns(40, 60);
document.getElementById("ans_10").innerHTML = ("M " + " = " + nweSwap.a);
document.getElementById("ans_11").innerHTML = ("N " + " = " + nweSwap.b);

//  fifth Qustion Ans

var evenOdd = function (number) {
    var scale = (number % 2 == 0 ? "even" : "odd");
    return scale;

}
var nweEvenOdd = evenOdd(67);

document.getElementById("ans_12").innerHTML = (" number is " + nweEvenOdd);