import React, { useEffect } from "react";

export default function CanvasBg() {
  useEffect(() => {
    const canvas = document.getElementById("bgCanvas");
    const ctx = canvas.getContext("2d");
    let w, h, t = 0;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    function draw() {
      ctx.clearRect(0, 0, w, h);
      t += 0.015;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        for (let x = 0; x < w; x += 10) {
          const y = h / 2 + 50 * Math.sin(x * 0.01 + t + i * 2);
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `hsla(${150 + i * 30},70%,50%,0.2)`;
        ctx.lineWidth = 40;
        ctx.stroke();
      }
      requestAnimationFrame(draw);
    }
    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas id="bgCanvas" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }} />;
}
