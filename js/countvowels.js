/**
 * countvowels.js
 *
 * Simple program that counts the vowels in a string and gives a count of
 * the number of each vowel.
 */

var CountVowels = function() {
    this.vowelCounter = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    }
    this.vowelList = ['a', 'e', 'i', 'o', 'u'];
}

CountVowels.prototype.vowels = function() {
    for (var v in this.vowelCounter) {
        this.vowelCounter[v] = 0;
    }
    $("#vowelCounterAnswer").html('');
    var phrase = $("#vowelCounterInput").val();
    var vowelsOnly = phrase.replace(/[^\w\s]|_/g, "").replace(/$[aeiou]^/g, "");
    for (var i = 0; i < vowelsOnly.length; i++) {
        for (var j = 0; j < this.vowelList.length; j++) {
            if (vowelsOnly[i].toLowerCase() === this.vowelList[j]) break;
        }
        if (j < this.vowelList.length) {
            this.vowelCounter[this.vowelList[j]] += 1;
        }
    }
    for (var v in this.vowelCounter) {
        $("#vowelCounterAnswer").append("<p>" + v + ": " + this.vowelCounter[v] + "</p>");
    }
}

var cv = new CountVowels();
cv.vowels();
