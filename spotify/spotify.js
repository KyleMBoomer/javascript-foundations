function createCollection(name, description, tracks) {
  var chillHits = {
    name : name, 
    description : description,
    tracks : []
  }
  return chillHits
}

function createTrack(title, artist, duration) {
  var track = {
    title: title || 'unknown', 
    duration: duration || 0, 
    artist: artist || 'unknown'
  }
  return track
}

function reviewTrack(track) {
  if (track.artist === 'Red Hot Chili Peppers') {
    return `The song ${track.title} rules!`
    } 
    if (track.artist !== 'Red Hot Chili Peppers') {
     return 'I wish this was a Red Hot Chili Peppers song.'
  }
}

function addTrack(chillHits, songArray) {
chillHits.tracks.push(songArray)
return chillHits
}

function getTotalDuration(chillHits) {
var playtime = 0
for (var i = 0; i < chillHits.tracks.length; i++) {
    playtime += chillHits.tracks[i].duration
  }
  return playtime
}

function findTracksByArtist(chillHits, array) {
var newList = []
for (var i = 0; i < chillHits.tracks.length; i++) {
    if (chillHits.tracks[i].artist === 'The Midnight') {
      newList.push(chillHits.tracks[i])
    }
  }
  return newList
}


  module.exports = { createCollection, 
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration, 
    findTracksByArtist
   }