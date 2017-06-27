var constants = {
	token_youtube: "AIzaSyBPytlCrUXqVDFrFXDM3hvhLAK_AdXw6-I",
	token_soundcloud: "",
	base_url_youtube: "https://www.googleapis.com/youtube/v3",
	base_url_soundcloud: "",
}

var requests = {
	youtube: null,
	soundcloud: null
}

requests.youtube = function() {
	$.ajax({
		type: 'GET',
		url: 'https://www.googleapis.com/youtube/v3/search',
		data: {
			part: 'snippet',
			q: 'front+end+web+development',
			key: constants.token_youtube,
			maxResults: 10,
			type: ''
		},
		dataType: 'jsonp',
		success: function(data) {
			console.log('data', data);
			fillList(data.items);
		},
		error: function() {
			alert('Something went wrong');
		}
	})
}


function fillList(list) {
	$.each(list, function(index, value) {
		$('.js-playlist').append('<li class="playlist-item"><a class="js-playlist-item" href="#" data-id="' + value.id.videoId + '">' + value.snippet.title + '</a></li>');
	});
}


$(document).on('click', '.js-playlist-item', function() {
	var videoid = $(this).attr("data-id");
	$(".js-player-youtube iframe").remove();
	$('<iframe width="420" height="315" frameborder="0" allowfullscreen></iframe>')
    .attr("src", "http://www.youtube.com/embed/" + videoid)
    .appendTo(".js-player-youtube");
});



$(document).ready(function() {
	// Start the requests
	requests.youtube();
});