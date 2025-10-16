import './Expertise.css';

const Expertise = () => {
  const expertiseItems = [
    {
      id: 1,
      icon: "fa-brain",
      title: "Personalized Learning",
      description: "We create customized learning plans based on each student's strengths, weaknesses, and learning style."
    },
    {
      id: 2,
      icon: "fa-chart-bar",
      title: "Proven Results",
      description: "Our students consistently show significant improvement in grades and test scores."
    },
    {
      id: 3,
      icon: "fa-users-cog",
      title: "Small Class Sizes",
      description: "We maintain small student-to-teacher ratios to ensure individual attention for every student."
    },
    {
      id: 4,
      icon: "fa-user-tie",
      title: "Qualified Instructors",
      description: "All our tutors are highly qualified with advanced degrees and extensive teaching experience."
    },
    {
      id: 5,
      icon: "fa-calendar-alt",
      title: "Flexible Scheduling",
      description: "Choose from morning, afternoon, or evening sessions to fit your schedule."
    },
    {
      id: 6,
      icon: "fa-laptop-code",
      title: "Modern Learning Tools",
      description: "Access to digital resources and interactive learning platforms for enhanced understanding."
    }
  ];

  return (
    <section className="expertise" id="expertise">
      <div className="container">
        <div className="section-title">
          <h2>Our Expertise</h2>
          <p>What sets us apart from other tuition centers</p>
        </div>
        
        <div className="expertise-grid">
          {expertiseItems.map(item => (
            <div className="expertise-item" key={item.id}>
              <div className="expertise-icon">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <div className="expertise-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="expertise-stats">
          <div className="stat">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Students Taught</div>
          </div>
          <div className="stat">
            <div className="stat-number">95%</div>
            <div className="stat-label">Success Rate</div>
          </div>
          <div className="stat">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat">
            <div className="stat-number">50+</div>
            <div className="stat-label">Expert Teachers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;