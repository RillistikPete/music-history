var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

console.log(songs);

var endSong = "Face > by The Dudes on the album Candy";
var firstSong = "First > by My Friends on the album Silly";

songs.push(endSong);
songs.unshift(firstSong);



for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace('*', '').replace('@', '').replace('(', '').replace('!','');
	songs[i] = songs[i].replace('>', '-');
}
console.log(songs);

// document.getElementById('container').innerHTML = songs;


//_______________________Music History 3 Exercise____________________




$("#viewMusic").click(function(event){
	console.log("click works", event);
	$('#listMusicView').addClass("showContainer");
	$('#listMusicView').removeClass("hideContainer");
	$('#addMusicView').addClass("hideContainer");
});

$("#addMusic").click(function(event){
	console.log("works", event);
	$('#addMusicView').removeClass("hideContainer");
	$('#listMusicView').addClass("hideContainer");
});

//Once the user fills out the song form and clicks the add button, you should
//collect all values from the input fields, add the song to your array of songs,
//and update the song list in the DOM (below)


var title = $("#title")[0];
var artist = $("#artist")[0];
var album = $("#album")[0];

var songBox = $("#container");

$("#addBtn").click(function(event){

		songBox.html(`<h2>${title.value}</h2>
							<p>${artist.value}</p>
							<p>${album.value}</p>`);

		$('#addMusicView').addClass("hideContainer");
		$('#listMusicView').addClass("showContainer");
		$('#listMusicView').removeClass("hideContainer");

	});

//_____________________________________________________________

var songRequest = new XMLHttpRequest();

songRequest.addEventListener("load", requestComplete);
songRequest.addEventListener("error", requestFail);

function requestComplete(event){
	var songData = JSON.parse(event.target.responseText).songs;
	console.log("load successful");
	showSongs(songData);
}
function requestFail(event){
	console.log("request failed - error");
}

songRequest.open("GET", "songs.json");
songRequest.send();

function showSongs(jsonObject){
	for (var i = 0; i < jsonObject.length; i++){
		//var songList = $("#container");
		var songList = $("#container");
		let newSong = $("<div>")
		newSong.append(`<p>${jsonObject[i].title}</p>
							<p>${jsonObject[i].artist}</p>
							<p>${jsonObject[i].album}</p>
							<button id="delete" class="delete">Delete Song</button>`);

		songList.append(newSong);

		newSong.click(function(event){
			console.log("click for delete works");
			if (event.target.tagName.toLowerCase() === "button"){
				$(newSong).remove();
			}

		})
	}
}





