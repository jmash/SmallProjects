/**
 * reversestr.js
 *
 * simple program that takes in a string, 
 * reverses it, and returns the reversed
 * string.
 */

var ReverseString = function() {
    
}

ReverseString.prototype.reverse = function() {
    var str = $("#reverseStrInput").val().split(" ");
    var revStr = [];

    for (var w in str) {
        revStr.push(reverseWord(str[w]));
    }

    var reverse = revStr.reverse().join(" ");
    $("#reverseStrAnswer").text(reverse);

    function reverseWord(word) {
        return word.split("").reverse().join("");
    }

    function checkUpperCase(letter) {
        if (/[a-z]/i.test(letter)) {
            return (letter === letter.toUpperCase());
        }
    }
}

var rs = new ReverseString();
