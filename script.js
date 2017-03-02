$(document).ready(function() {
	console.log("i'm working");
	$.get("https://www.reddit.com/r/aww/.json", function(goodness) {
		var redditArray = goodness.data.children;
		for (var i = 0; i < redditArray.length; i++) {
			var title = redditArray[i].data.title;
			var author = redditArray[i].data.author;
			var score = redditArray[i].data.score;
			var thumbnail = redditArray[i].data.thumbnail;
			var permalink = 'https://www.reddit.com/' + redditArray[i].data.permalink;
			$('section').append('<div class ="link"><h2> Title: ' + title + '</h2>' + '<h2> Author: ' + author + '</h2>' + '<h2> Score: ' + score + '</h2>' + '<a class="pic" href=" ' + permalink + '">' + '<img src="' + thumbnail + '"/>' + '</a>' + '</div>');
		}
	});
});
