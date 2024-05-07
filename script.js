class Song {
  constructor(name, genre) {
    this.name = name;
    this.genre = genre;
  }
}

const library = []
const genres = ["Rock", "Pop", "Hip Hop", "Jazz", "Electronic"];
for (let i = 0; i < 20; i++) {
    const randomName = `Song${i+1}`;
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];
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