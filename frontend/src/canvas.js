export function startCanvasAnimation() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let w, h, t = 0;
  
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  function draw() {
    ctx.clearRect(0, 0, w, h);
    t += 0.015;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      for (let x = 0; x < w; x += 10) {
        let y = h / 2 + 50 * Math.sin(x * 0.01 + t + i * 2);
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `hsla(${150+i*30},70%,50%,0.2)`;
      ctx.lineWidth = 40;
      ctx.stroke();
    }
    requestAnimationFrame(draw);
  }

  draw();
}
