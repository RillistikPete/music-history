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

var addMusic = document.getElementById("addMusic");
var viewMusic = document.getElementById("viewMusic");

viewMusic.addEventListener("click", function(event){
	console.log("click works", event);
	document.getElementById('listMusicView').classList.add("showContainer");
	document.getElementById('listMusicView').classList.remove("hideContainer");
	document.getElementById('addMusicView').classList.add("hideContainer");
});

addMusic.addEventListener("click", function(event){
	console.log("works", event);
	//document.getElementById('addMusicView').classList.remove("hideContainer");
	document.getElementById('addMusicView').classList.remove("hideContainer");
	document.getElementById('listMusicView').classList.add("hideContainer");
});

//Once the user fills out the song form and clicks the add button, you should
//collect all values from the input fields, add the song to your array of songs,
//and update the song list in the DOM (below)


var title = document.getElementById("title");
var artist = document.getElementById("artist")
var album = document.getElementById("album")

var addButton = document.getElementById("addBtn");

var songBox = document.getElementById("container");

addButton.addEventListener("click", function(event){

		songBox.innerHTML = `<h2>${title.value}</h2>
							<p>${artist.value}</p>
							<p>${album.value}</p>`

		document.getElementById('addMusicView').classList.add("hideContainer");
		document.getElementById('listMusicView').classList.add("showContainer");
		document.getElementById('listMusicView').classList.remove("hideContainer");

	});




