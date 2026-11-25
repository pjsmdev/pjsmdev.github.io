import { Mail } from 'lucide-react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Section Header */}
        <div className="contact-header">
          <span className="section-eyebrow">GET IN TOUCH</span>
          <h2>Let's Connect</h2>

          <p>
            I'm always open to connecting with cybersecurity professionals,
            discussing technical projects, and exploring new opportunities.
          </p>
        </div>

        {/* Contact Actions */}
        <div className="contact-actions">

          {/* Email */}
          <a
            href="mailto:pjsm.dec@protonmail.com"
            className="contact-email-button"
          >
            <Mail size={18} />
            <span>Email Me</span>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="contact-linkedin-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/icons/LI-In-Bug.png"
              alt=""
            />
            <span>LinkedIn</span>
          </a>

        </div>
      </div>
    </section>
  )
}

export default Contact
