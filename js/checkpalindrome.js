/**
 * checkpalindrome.js
 *
 * Simple program to check if a program is a palindrome or not.
 */

var PalindromeCheck = function() {

};

PalindromeCheck.prototype.checkPalindrome = function() {
    var phrase = $("#palindromeCheckInput").val().replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ").toLowerCase();
    if (phrase.split("").reverse().join("") === phrase) {
        $("#palindromeCheckAnswer").text("Is Palindromic");
    } else {
        $("#palindromeCheckAnswer").text("Is Not Palindromic");
    }
}

var cp = new PalindromeCheck();
