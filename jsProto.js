
function Library (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  
}

function Playlist (name) {
  this.name = name;
  this.tracks = [];
}

  
function Track (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Playlist.prototype.addTrack = function(newTrack) {
  this.tracks.push(newTrack);
};
Playlist.prototype.overallRating = function () {
  return rating = this.tracks.reduce(function (a, b) {
    return a + b.rating;
  }, 0);
};

Playlist.prototype.totalDuration = function () {
  return duration = this.tracks.reduce(function (a, b) {
    return a + b.duration;
  }, 0);
};

Library.prototype.AddPlaylist = function(newPlaylist) {
  this.playlists.push(newPlaylist);
};


//DEMO
var libraryBrandNew = new Library("Adele All songs", "Nawar");
var t1 = new Track("Rolling in the deep", 120, 3);
var t2 = new Track("The Rumors Has it", 120, 3);
var p1 = new Playlist("Adele's Best hits 1900");
var p2 = new Playlist("Adele's Best hits 2016 ");
p1.addTrack(t1);
p1.addTrack(t2);
p2.addTrack(t2);
p2.addTrack(t2);
libraryBrandNew.AddPlaylist(p1);
libraryBrandNew.AddPlaylist(p2);
p2.overallRating();
p1.totalDuration();

