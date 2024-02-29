function createSong(name, artist, favorite, hasBeenPlayed) {
  var song = {
    name: name, 
    artist: artist, 
    favorite: favorite || false,
    hasBeenPlayed: hasBeenPlayed || false 
  }
  return song
}

function playSong(song) {
song.hasBeenPlayed = true
return song
}

function makePlaylist(string, array) {
var playlist = {
  name: string,
  songs: array
}
return playlist
}

function addSongToPlaylist(playlist, song) {
playlist.songs.push(song)
return playlist
}

function playSongs(playlist){
  for (var i = 0; i < playlist.songs.length; i++) {
playlist.songs[i].hasBeenPlayed = true;
for (var j = 0; j < playlist.songs.length; j++) {
  if (playlist.songs[i].favorite === false) {
    playlist.songs[i].hasBeenPlayed = false
      }
      console.log('playlist loop2', playlist)
   }
   console.log('playlist loop1', playlist)
}
console.log('playlist return', playlist)
return playlist
}

module.exports = { 
  createSong, 
  playSong, 
  makePlaylist, 
  addSongToPlaylist, 
  playSongs
};
