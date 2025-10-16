import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Unlock Your Academic Potential With Expert Guidance</h1>
          <p>We provide personalized tutoring to help students excel in their studies and achieve their academic goals.</p>
          <div className="hero-buttons">
            <a href="#courses" className="btn">Explore Courses</a>
            <a href="#contact" className="btn btn-accent">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;