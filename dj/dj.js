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

function playSongs(playlist, string){
  var isFavoritesOnly = string === 'favorites only'
for (var i = 0; i < playlist.songs.length; i++) {
  if (isFavoritesOnly) {
   if (playlist.songs[i].favorite === true) {
    playlist.songs[i].hasBeenPlayed = true
   }
  } else {
    playlist.songs[i].hasBeenPlayed = true
  }
}
return playlist
}
//if song.favorite === true
//if 
module.exports = { 
  createSong, 
  playSong, 
  makePlaylist, 
  addSongToPlaylist, 
  playSongs
};
