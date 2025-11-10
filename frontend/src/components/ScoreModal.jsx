import { useEffect, useRef } from "react";

export default function ScoreModal({ data, onClose, onRetake, onBack }) {
  const { total, correct, answers, subject } = data;
  const canvasRef = useRef(null);

  useEffect(() => {
    // run confetti for a short time
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let particles = [];

    function rand(min, max) { return Math.random() * (max - min) + min; }

    function createBurst() {
      const count = 120;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: w / 2 + rand(-200, 200),
          y: h / 2 + rand(-100, 100),
          vx: rand(-6, 6),
          vy: rand(-12, -4),
          size: rand(6, 12),
          color: `hsl(${rand(0, 360)},70%,50%)`,
          life: rand(60, 140)
        });
      }
    }

    function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
    window.addEventListener("resize", resize);

    createBurst();
    let raf;
    function loop() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.life--;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.size, p.size*0.6, 0, 0, Math.PI*2);
        ctx.fill();
        if (p.life <= 0) particles.splice(i, 1);
      });
      raf = requestAnimationFrame(loop);
    }
    loop();

    // stop after 4s
    const t = setTimeout(() => {
      if (raf) cancelAnimationFrame(raf);
    }, 4000);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Gradient theme style values:
  const gradientStyle = {
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    color: "#fff",
    borderRadius: 18,
    padding: 22,
    width: "min(720px, 92%)",
    boxShadow: "0 12px 40px rgba(37,117,252,0.2)",
    textAlign: "center"
  };

  return (
    <div
      className="modal"
      style={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 9998, pointerEvents: "none" }} />
      <div className="modal-content" style={gradientStyle} onClick={(e)=>e.stopPropagation()}>
        <h2 style={{ marginBottom: 6 }}>SmartCoder Result</h2>
        <p style={{ opacity: 0.9, marginBottom: 12 }}>Subject: <strong>{subject}</strong></p>

        <div style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>
          {correct} <span style={{ fontSize: 20, fontWeight: 500 }}>/ {total}</span>
        </div>

        <p style={{ marginBottom: 18 }}>
          {correct === total ? "Perfect! You're a champ! 🎉" : "Great attempt — keep practicing!"}
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 16 }}>
          <button className="cta" onClick={onRetake}>Retake</button>
          <button onClick={onBack} style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", padding: "8px 14px", borderRadius: 10 }}>Back</button>
        </div>

        <div style={{ textAlign: "left", maxHeight: "240px", overflowY: "auto", marginTop: 8, background: "rgba(255,255,255,0.06)", padding: 12, borderRadius: 10 }}>
          <h4 style={{ margin: "6px 0 10px" }}>Answers</h4>
          {answers.map((a, idx) => (
            <div key={idx} style={{ marginBottom: 10 }}>
              <div style={{ fontWeight: 600 }}>{idx+1}. {a.question}</div>
              <div style={{ marginTop: 6 }}>
                {a.options.map((opt, i) => {
                  const isCorrect = i === a.correctAnswer;
                  const isChosen = i === a.selected;
                  const labelStyle = {
                    display: "inline-block",
                    padding: "6px 10px",
                    marginRight: 8,
                    borderRadius: 8,
                    background: isCorrect ? "rgba(0,0,0,0.15)" : "transparent",
                    color: "#fff",
                    border: isChosen ? "1px solid rgba(255,255,255,0.25)" : "none",
                    opacity: isCorrect ? 1 : 0.85,
                    fontSize: 14
                  };
                  return <span key={i} style={labelStyle}>{opt}{isCorrect ? " ✅" : ""}{isChosen && !isCorrect ? " ✖" : ""}</span>;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
