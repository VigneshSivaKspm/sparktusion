import { type FormEvent, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      id: 1,
      icon: "map-marker-alt",
      text: "4th Floor, B-BLOCK, 739, AECS B Block, AECS Layout, Singasandra, Bengaluru, Karnataka 560114"
    },
    {
      id: 2,
      icon: "phone",
      text: "070196 82889"
    },
    {
      id: 3,
      icon: "envelope",
      text: "info@sparktuition.com"
    },
    {
      id: 4,
      icon: "clock",
      text: "Mon - Sat: 9:00 AM - 7:00 PM"
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch to schedule a free consultation or ask any questions</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="contact-details">
              {contactInfo.map(info => (
                <div className="contact-detail" key={info.id}>
                  <i className={`fas fa-${info.icon}`}></i>
                  <p>{info.text}</p>
                </div>
              ))}
            </div>
            
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>

            <div className="contact-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62232.29695710294!2d77.58436812936489!3d12.874342209386406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d14a4e5051%3A0x5ecfe9eadc11ca59!2sSPARK%20TUITION%20CENTRE!5e0!3m2!1sen!2sin!4v1760548107549!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
              ></iframe>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  className="form-control"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                >
                  <option value="">Select a Subject</option>
                  <option value="math">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="language">Languages</option>
                  <option value="cs">Computer Science</option>
                  <option value="business">Business & Economics</option>
                  <option value="arts">Arts & Humanities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;