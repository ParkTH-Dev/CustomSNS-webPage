const songs = document.querySelectorAll(".albumTable_song");

for (let song of songs) {
  const play = song.querySelector(".fa-play");
  const pause = song.querySelector(".fa-pause");
  const audio = song.querySelector("audio");

  play.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach((a) => {
      if (a !== audio) a.pause();
    });
    audio.play();
    play.style.display = "none";
    pause.style.display = "inline-block";
  });

  pause.addEventListener("click", () => {
    audio.pause();
    pause.style.display = "none";
    play.style.display = "inline-block";
  });
}

const selectAll = document.querySelector("#selectAll");
selectAll?.addEventListener("change", (e) => {
  const checkboxes = document.querySelectorAll("tbody input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = e.target.checked;
  });
});
