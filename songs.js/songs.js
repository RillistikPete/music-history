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

document.getElementById('container').innerHTML = songs;


