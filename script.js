function button() {
  document.documentElement.requestFullscreen()
  document.getElementById("thebutton").remove();
  document.getElementById("rick").play();
  document.title="Trolled!";
  document.getElementById("theicon").href="/img/trollface.ico";
}
