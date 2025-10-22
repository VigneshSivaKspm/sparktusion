import './Teachers.css';

const Teachers = () => {
  return (
    <section className="teachers" id="teachers">
      <div className="container">
        <div className="section-title">
          <h2>Our Teachers</h2>
          <p>Meet our experienced educators — crafted profiles to help you choose the right mentor.</p>
        </div>

        <div className="teachers-grid">
          {/* Profile 1: Spoken English Specialist */}
          <article className="teacher-card highlight" aria-labelledby="teacher-english">
            <header className="teacher-card-header">
              <div className="teacher-avatar" aria-hidden="true">TE</div>
              <div>
                <h3 id="teacher-english">Spoken English Specialist</h3>
                <p className="role">Specialist in Spoken English & Communication Skills</p>
              </div>
            </header>

            <div className="teacher-card-body">
              <h4 className="subhead">Professional summary</h4>
              <p className="summary">With over 32 years of disciplined service in the National Cadet Corps (NCC) and experience as an Administrative Officer interacting nationwide with principals, teachers and students, this educator brings a unique blend of leadership, discipline and communication expertise to the classroom. Now retired from active service, the focus is on helping learners gain confidence and fluency in Spoken English.</p>

              <h4 className="subhead">Key competencies</h4>
              <ul className="list competencies">
                <li>Mastery of English language (academic & conversational)</li>
                <li>Extensive exposure to multi-regional, multi-lingual Indian learner populations</li>
                <li>Ability to build trust and rapport quickly (leveraging defence-grounded leadership)</li>
                <li>Strong pedagogic foundation: B.Sc., B.Ed., M.A. (English) & MBA — Indira Gandhi National Open University</li>
                <li>Tailoring of sessions for adults & young learners: presentation, interview, debate, everyday communication</li>
              </ul>

              <h4 className="subhead">Teaching / service highlights</h4>
              <ul className="list competencies">
                <li>Served the NCC for 32 years, collaborating and interacting with educational institutions across India</li>
                <li>Engaged with school principals, teachers and cadets as an Administrative Officer — developing an understanding of institutional needs and learner mindsets</li>
                <li>Transitioned into formal teaching roles in multiple schools, bringing structure, clarity and purposeful communication into learning environments</li>
                <li>Driven by the vision of transforming learners into confident communicators in English for professional, academic and social contexts</li>
              </ul>

              <h4 className="subhead">What is offered</h4>
              <ul className="list competencies">
                <li>Spoken English workshops: group or one-to-one formats</li>
                <li>Conversational English for real-life use: travel, work, presentation, socialising</li>
                <li>Accent clarity, pronunciation drills, fluency practice, role-plays</li>
                <li>Interview & public speaking coaching: young adults & professionals</li>
                <li>Regular feedback & personalised improvement plans</li>
              </ul>

              <h4 className="subhead">Why choose this instructor</h4>
              <p className="summary">The defence and education background blends discipline with empathy. Learners get a guide who understands how to motivate, challenge and support. Cross-India exposure ensures awareness of diverse student profiles and adaptive teaching approaches.</p>

              <div className="meta">
                <div className="education">
                  <strong>Educational credentials:</strong>
                  <span>B.Sc., B.Ed., M.A. (English), MBA — IGNOU</span>
                </div>
              </div>
            </div>
          </article>

          {/* Profile 2: CBSE/ICSE Teacher */}
          <article className="teacher-card" aria-labelledby="teacher-cbse">
            <header className="teacher-card-header">
              <div className="teacher-avatar alt" aria-hidden="true">TE</div>
              <div>
                <h3 id="teacher-cbse">Educator for Classes 1 to 12</h3>
                <p className="role">CBSE & ICSE — Curriculum & Exam Readiness</p>
              </div>
            </header>

            <div className="teacher-card-body">
              <h4 className="subhead">Professional summary</h4>
              <p className="summary">With an accomplished career spanning three decades in the NCC and administrative defence roles bridging schools across India, this educator brings a rich educational leadership background into the mainstream classroom. Now fully dedicated to school education, the focus is on guiding learners from Class 1 through Class 12 under both CBSE and ICSE curricula.</p>

              <h4 className="subhead">Key competencies</h4>
              <ul className="list competencies">
                <li>Full spectrum teaching: primary to senior secondary (Grades 1–12)</li>
                <li>Familiarity with CBSE & ICSE frameworks, assessment styles and curriculum demands</li>
                <li>Strong foundational subject knowledge and pedagogical training (B.Sc., B.Ed.)</li>
                <li>Advanced language & management credentials (M.A. English; MBA) enabling handling of both academic subjects and student-mentoring/administration</li>
                <li>Ability to liaise with school leadership, teachers and students — informed by NCC-administrative experience</li>
              </ul>

              <h4 className="subhead">Teaching / service highlights</h4>
              <ul className="list competencies">
                <li>Extensive tenure in NCC — providing exposure to school ecosystems across states and collaboration with principals and educators</li>
                <li>Served as teacher in multiple schools, adapting methods for various age groups and academic levels</li>
                <li>Focused on building conceptual foundations, exam preparation and holistic development in CBSE & ICSE settings</li>
              </ul>

              <h4 className="subhead">What is offered</h4>
              <ul className="list competencies">
                <li>Comprehensive tutoring for Grades 1–12: all major subjects (special strength in English)</li>
                <li>Curriculum-mapped lesson planning, revision sessions and exam-readiness strategies</li>
                <li>Behavioural mentoring and study-skill development for senior secondary classes</li>
                <li>Parent-teacher communication support, customised learner-progress tracking</li>
                <li>Remedial and enrichment sessions for students needing extra support or aiming for excellence</li>
              </ul>

              <h4 className="subhead">Why choose this instructor</h4>
              <p className="summary">More than textbook knowledge: leadership experience, teaching skillset and a deep understanding of schools' operational workings help tailor learning to each student's needs. The approach blends structure, support and inspiration to bring out the best in every learner.</p>

              <div className="meta">
                <div className="education">
                  <strong>Educational credentials:</strong>
                  <span>B.Sc., B.Ed., M.A. (English), MBA — IGNOU</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="teachers-cta">
          <h3>Book a trial class</h3>
          <p>Interested in a trial or institution partnership? Reach out and we'll schedule a session tailored to your needs.</p>
          <a href="#contact" className="btn">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Teachers;