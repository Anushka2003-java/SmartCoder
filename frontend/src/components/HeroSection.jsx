export default function HeroSection({ onStart }) {
  return (
    <section id="home" className="section home">
      <div className="hero-content">
        <h1>Master Your Skills with <span>SmartCoder</span></h1>
        <p>Prepare, Practice, and Level Up for Your Dream Career.</p>
        <button className="cta" onClick={onStart}>Start Learning</button>
      </div>
    </section>
  );
}
