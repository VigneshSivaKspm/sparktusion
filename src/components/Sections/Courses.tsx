import './Courses.css';

const Courses = () => {
  const courses = [
    {
      id: 1,
      icon: "fa-school",
      title: "CBSE / ICSE (1st–12th)",
      description: "Comprehensive school curriculum coaching for CBSE and ICSE boards from Grade 1 through Grade 12. Curriculum-mapped lessons, revision plans and exam strategies."
    },
    {
      id: 2,
      icon: "fa-rocket",
      title: "JEE / NEET / CET Coaching",
      description: "Targeted entrance exam coaching with structured modules, practice tests and doubt-clearing sessions for JEE, NEET and CET aspirants."
    },
    {
      id: 3,
      icon: "fa-cogs",
      title: "Engineering Subjects",
      description: "Subject coaching across engineering streams — Aerospace, Mechanical, AI and more. Focus on core concepts, problem solving and application-based learning."
    },
    {
      id: 4,
      icon: "fa-graduation-cap",
      title: "B.Sc Coaching",
      description: "B.Sc. level coaching in Mathematics, Physics and AI — designed for strong conceptual grounding and university exam readiness."
    }
  ];

  return (
    <section className="courses" id="courses">
      <div className="container">
        <div className="section-title">
          <h2>Our Courses</h2>
          <p>We offer a wide range of subjects and levels to meet every student's needs</p>
        </div>
        
        <div className="courses-grid">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <div className="course-icon">
                <i className={`fas ${course.icon}`}></i>
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <a href="#contact" className="btn">Learn More</a>
              </div>
            </div>
          ))}
        </div>

        <div className="admission-info">
          <h3>Admissions Open Now!</h3>
          <p>Don't miss the opportunity to achieve your academic goals with Spark Learning Hub.</p>
          <a href="#contact" className="contact-button">Enquire & Book</a>
        </div>
      </div>
    </section>
  );
};

export default Courses;