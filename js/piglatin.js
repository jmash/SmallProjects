/**
 * piglatin.js
 *
 * Simple program that takes an input and 'translates' it
 * into Pig Latin.
 */

var PigLatin = function() {

};

PigLatin.prototype.translate = function() {
    var phrase = $("#pigLatinInput").val();
    var words = phrase.split(" ");
    var pigLatinized = [];
    for (var w in words) {
        if (vowelTest(words[w][0])) {
            pigLatinized.push(words[w] + "way");
        } else {
            var fl = words[w].split("").shift().toLowerCase();
            if (Number(w) === 0) {
                pigLatinized.push(words[w][1].toUpperCase() + words[w].slice(2, words[w].length) + fl + "ay");
            } else {
                pigLatinized.push(words[w][1] + words[w].slice(2, words[w].length) + fl + "ay");
            }
        }
    }
    pigLatinized.map((word) => { $("#pigLatinAnswer").append(stripSpecial(word) + " "); })

    function vowelTest(s) {
      return (/^[aeiou]$/i).test(s);
    }

    function stripSpecial(s) {
      return s.replace(/\W/g, '');
    }
}

var pl = new PigLatin();
