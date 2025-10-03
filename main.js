const card = document.getElementById("card");


card.addEventListener("click", () => {
  card.classList.toggle("flipped");


  const music = document.getElementById("bg-music");
  music.play();
});
