import './Courses.css';

const Courses = () => {
  const courses = [
    {
      id: 1,
      icon: "fa-dna",
      title: "NEET Preparation",
      description: "Comprehensive coaching for the National Eligibility cum Entrance Test (NEET) for aspiring medical and dental students. Focus on Physics, Chemistry, and Biology."
    },
    {
      id: 2,
      icon: "fa-calculator",
      title: "JEE Preparation",
      description: "Intensive training for the Joint Entrance Examination (JEE Main & Advanced) for admission to premier engineering institutes. Covering Physics, Chemistry, and Mathematics."
    },
    {
      id: 3,
      icon: "fa-school",
      title: "KCET Preparation",
      description: "Dedicated coaching for the Karnataka Common Entrance Test (KCET) for admissions to various professional courses in Karnataka."
    },
    {
      id: 4,
      icon: "fa-book-open",
      title: "Board Exam Coaching",
      description: "In-depth subject tuition for students from First Standard to Twelfth Standard for all major boards. Personalized and focused approach to ensure strong foundational knowledge."
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
          <p className="highlight">Contact us for personalized guidance!</p>
          <a href="tel:+917019682889" className="contact-button">Call Now: 070196 82889</a>
        </div>
      </div>
    </section>
  );
};