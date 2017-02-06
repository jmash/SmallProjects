/**
 * fizzbuzz.js
 *
 * The classic Fizzbuzz program. Prints the numbers
 * n to m, except for multiples of three (where
 * instead "fizz" is written), multiples of five
 * (where "buzz" is written), and multiples of both
 * three and five (where "fizzbuzz" is written).
 */

var FizzBuzz = function(start, end) {
   this.start = start;
   this.end = end; 
}

FizzBuzz.prototype.print = function() {
    var i = this.start-1;
    while (i < this.end) {
        i++;
        if (i % 3 === 0 && i % 5 === 0) { $("#fizzbuzzAnswer").append("<p>Fizzbuzz</p>"); continue; } 
        if (i % 3 === 0) { $("#fizzbuzzAnswer").append("<p>Fizz</p>"); continue; } 
        if (i % 5 === 0) {  $("#fizzbuzzAnswer").append("<p>Buzz</p>"); continue; }
        $("#fizzbuzzAnswer").append("<p>"+i+"</p>");
    }
}

var fb = new FizzBuzz(1, 100);


