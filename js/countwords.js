/**
 * countwords.js
 *
 * Simple program that takes in text and counts the number of words.
 * It also prints a summary of the number of times each word occurs.
 */

var WordCount = function() {
    this.summary = {}
}

WordCount.prototype.countWords = function() {
    this.summary = {};
    $("#wordCountAnswer2").text("");
    var passage = $("#wordCountInput").val();
    var passage = passage.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    var words = passage.split(" ");
    for (var w in words) {
        this.addWordToSummary(words[w].toLowerCase());
    }
    $("#wordCountAnswer1").text("Word Count: " + passage.split(" ").length);
    for (var w in this.summary) {
        $("#wordCountAnswer2").append("<p> " + w + ": " + this.summary[w] + "</p>");
    }
}

WordCount.prototype.addWordToSummary = function(word) {
  (this.summary[word]) ? this.summary[word] += 1 : this.summary[word] = 1;
}

var wc = new WordCount();
