function sum(num1, num2, callback) {
  const total = num1 + num2;
  if (isNaN(total)) {
    const error = 'Something went wrong!';
    callback(error);
  } else {
    callback(null, total);
  }
}

const genres = [
  "Alternative",
  "Blues",
  "Children's Music",
  "Christian & Gospel",
  "Christmas",
  "Classical & Opera",
  "Country",
  "Dance & Electronic",
  "Folk & Americana",
  "Hip Hop/Rap",
  "Indie",
  "Jazz",
  "Latin",
  "Metal",
  "New Age",
  "Oldies",
  "Pop",
  "Punk",
  "R&B/Soul",
  "Reggae",
  "Rock",
  "Singer-Songwriter",
  "Soundtracks",
  "Vocal/Easy Listening",
  "World"
]

module.exports = {
  sum,
  genres
};
