var constants = {
	token_youtube: "AIzaSyBPytlCrUXqVDFrFXDM3hvhLAK_AdXw6-I",
	token_soundcloud: "56958852ec1794589c3b2efe2c4d3f78",
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
		},
		error: function() {
			alert('Something went wrong');
		}
	})
}

requests.soundcloud = function() {
	
}



$(document).ready(function() {
	// Start the requests
	requests.youtube();
});