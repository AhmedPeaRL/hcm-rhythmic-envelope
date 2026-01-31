const canvas = document.getElementById('envelope');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

let t = 0;

function draw() {
  ctx.fillStyle = 'rgba(0,0,0,0.05)';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  const x = canvas.width / 2 + Math.sin(t) * 120;
  const y = canvas.height / 2 + Math.cos(t * 0.7) * 120;

  ctx.beginPath();
  ctx.arc(x, y, 2, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.fill();

  t += 0.01;
  requestAnimationFrame(draw);
}

draw();
