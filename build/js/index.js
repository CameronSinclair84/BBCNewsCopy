"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newsData_1 = require("./newsData");
var newsData = newsData_1.default;
var addToPage = function (article) {
    var html = "<article>\n    <div class=\"image\" style=\"background-image:url('" + checkImage(article.urlToImage) + "')\"></div>\n    <div class=\"content\">\n    <header>" + article.title + "</header>\n    <small>\n    <span class=\"time\">" + getFriendlyTime(article.publishedAt) + "</span>\n    <span class=\"source\">" + article.source.name + "</span>\n    </small>\n    <div class=\"description\">\n    " + article.description + "\n    </div>\n    <a href=\"" + article.url + "\" target=\"_blank\">Read more</a>\n    </div>\n    </article>";
    document.getElementById("articles").innerHTML += html;
};
var getFriendlyTime = function (date) {
    var dateObject = new Date(date);
    return dateObject.toLocaleTimeString();
};
var checkImage = function (url) {
    return (url) ? url : "../assets/placeholder-image.jpg";
};
newsData.articles.forEach(addToPage);
window.displayMenuItems = function (e) {
    e.preventDefault();
    document.getElementById("menulinks").classList.toggle("hidden");
};
//# sourceMappingURL=index.js.map