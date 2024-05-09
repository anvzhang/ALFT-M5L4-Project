class Song {
  constructor(name, genre) {
    this.name = name;
    this.genre = genre;
  }
}

const library = []
const genres = ["Rock", "Pop", "Hip Hop", "Jazz", "Electronic"];
for (let i = 0; i < 20; i++) {
  const randomName = `Song${i + 1}`;
  const randomGenre = genres[Math.floor(Math.random() * genres.length)];
  library.push(new Song(randomName, randomGenre));
  library.push(new Song(randomName, randomGenre));
}

console.log(library);

const rockPlaylist = [];
for (let song of library) {
  if (song.genre === "Rock") {
    rockPlaylist.push(song);
  }
}

console.log(rockPlaylist.reduce((str, song) => str + `${song.name} `, ""));

const popPlaylist = [];
for (let song of library) {
  if (song.genre === "Pop") {
    popPlaylist.push(song);
  }
}

console.log(popPlaylist.reduce((str, song) => str + `${song.name} `, ""));

const jazzPlaylist = [];
for (let song of library) {
  if (song.genre === "Jazz") {
    jazzPlaylist.push(song);
  }
}

console.log(jazzPlaylist.reduce((str, song) => str + `${song.name} `, ""));

let combinedPlaylist = [].concat(rockPlaylist, popPlaylist, jazzPlaylist);

combinedPlaylist = combinedPlaylist.filter((song, index) => combinedPlaylist.findIndex(otherSong => otherSong.name === song.name) === index);

console.log(combinedPlaylist.reduce((str, song) => str + `${song.name} `, ""));

combinedPlaylist.sort((a, b) => a.name.localeCompare(b.name));

console.log(combinedPlaylist.reduce((str, song) => str + `${song.name} `, ""));

let shuffledPlaylist = [];

for (let i = combinedPlaylist.length - 1; i >= 0; i--) {
  shuffledPlaylist.push(combinedPlaylist.pop(Math.floor(Math.random() * combinedPlaylist.length)));
}

console.log(shuffledPlaylist.reduce((str, song) => str + `${song.name} `, ""));


let longSongs = library.filter((song) => song.name.length > 10);

console.log(longSongs.reduce((str, song) => str + `${song.name} `, "") || "Empty");