import './Teachers.css';

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Mathematics Specialist",
      experience: "PhD in Mathematics with 15 years of teaching experience"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Science Tutor",
      experience: "MSc in Chemistry and 10 years of laboratory experience"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Language Arts Instructor",
      experience: "MA in English Literature and published author"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Computer Science Expert",
      experience: "Former software engineer with 12 years of industry experience"
    }
  ];

  return (
    <section className="teachers" id="teachers">
      <div className="container">
        <div className="section-title">
          <h2>Our Teachers</h2>
          <p>Meet our team of dedicated and experienced educators</p>
        </div>
        
        <div className="teachers-grid">
          {teachers.map(teacher => (
            <div className="teacher-card" key={teacher.id}>
              <div className="teacher-info">
                <h3>{teacher.name}</h3>
                <h4>{teacher.role}</h4>
                <p>{teacher.experience}</p>
                <div className="teacher-social">
                  <a href="#" aria-label={`LinkedIn profile of ${teacher.name}`}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" aria-label={`Email ${teacher.name}`}>
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="teachers-cta">
          <h3>Join Our Teaching Team</h3>
          <p>We're always looking for talented educators to join our faculty</p>
          <a href="#contact" className="btn">Apply Now</a>
        </div>
      </div>
    </section>
  );
};

export default Teachers;