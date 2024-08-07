var ctx = document.getElementById("my_canvas").getContext("2d");
var al = 0;
var start = -0.5 * Math.PI;
var cw = ctx.canvas.width;
var ch = ctx.canvas.height;
var diff;
function progressSim() {
  diff = (al / 100) * Math.PI * 2;
  ctx.clearRect(0, 0, cw, ch);
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.fillStyle = "white";
  ctx.strokeStyle = "white";
  ctx.textAlign = "center";
  ctx.font = "26px Arial";
  ctx.fillText(al + "%", cw * 0.5, ch * 0.5 + 2, cw);
  ctx.beginPath();
  ctx.arc(75, 70, 50, start, diff + start, false);
  ctx.stroke();
  al = al + 1;
  if (al >= 51) {
    clearTimeout(sim);
  }
}
var sim = setInterval(progressSim, 10);
window.onload = progressSim;