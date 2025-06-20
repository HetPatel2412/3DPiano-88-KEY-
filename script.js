const piano = document.getElementById("piano");

const keys = [
  "C1", "Db1", "D1", "Eb1", "E1", "F1", "Gb1", "G1", "Ab1", "A1", "Bb1", "B1",
  "C2", "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2",
  "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3",
  "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4",
  "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5",
  "C6", "Db6", "D6", "Eb6", "E6", "F6", "Gb6", "G6", "Ab6", "A6", "Bb6", "B6",
  "C7", "Db7", "D7", "Eb7", "E7", "F7", "Gb7", "G7", "Ab7", "A7", "Bb7", "B7",
  "C8"
];

// Preload audio files
const audioMap = {};
keys.forEach(note => {
  const audio = new Audio(`sounds/${note}.mp3`);
  audio.load();
  audioMap[note] = audio;
});

// Create keys dynamically
keys.forEach((note) => {
  const key = document.createElement("div");
  const isSharp = note.includes("b");
  key.className = `key ${isSharp ? "black" : "white"}`;
  key.dataset.note = note;
  key.textContent = note;

  if (isSharp) {
    const whiteKeys = piano.querySelectorAll(".white");
    const lastWhite = whiteKeys[whiteKeys.length - 1];
    if (lastWhite) {
      key.style.left = `${lastWhite.offsetLeft + 30}px`;
    }
  }

  key.addEventListener("click", () => {
    playNote(note);
    key.classList.add("active");
    setTimeout(() => key.classList.remove("active"), 150);
  });

  piano.appendChild(key);
});

function playNote(note) {
  const audio = audioMap[note];
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}
