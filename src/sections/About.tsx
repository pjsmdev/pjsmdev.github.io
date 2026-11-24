import { Mail, MapPin } from 'lucide-react'

import '../styles/About.css'

// Social and professional profile links
// Replace the placeholder URLs with your actual profile links.
const socialLinks = [
  {
    name: 'GitHub',
    icon: '/images/icons/square-github-brands-solid-full.svg',
    url: 'https://github.com/pjsmdev',
  },
  {
    name: 'LinkedIn',
    icon: '/images/icons/linkedin-brands-solid-full.svg',
    url: '#', // TODO: Add LinkedIn profile URL
  },
  {
    name: 'TryHackMe',
    icon: '/images/icons/tryhackme.svg',
    url: '#', // TODO: Add TryHackMe profile URL
  },
  {
    name: 'Hack The Box',
    icon: '/images/icons/hack-the-box.svg',
    url: '#', // TODO: Add Hack The Box profile URL
  },
]

// Professional experience
const professionalBackground = [
  'Automotive Manufacturing — Laser Cutting',
  'Software Development',
  'Family Caregiving',
]

// Personal interests and activities
const beyondTheCode = [
  'OSINT — Voluntary contribution to open-source intelligence research',
  'Brazilian Jiu-Jitsu — Training and teaching assistance',
  'Gaming & Magic: The Gathering',
  'Cinema — Coen Brothers & Guy Ritchie',
  'Music & Guitar — 70s, 80s & 90s',
]

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Left column: Profile photo, location and contact links */}
        <aside className="about-sidebar">
          <div className="about-profile">
            <img
              src="/images/profile.jpeg"
              alt="Paulo Melo"
              className="about-photo"
            />

            <div className="about-location">
              <MapPin size={16} />
              <span>Braga, Portugal</span>
            </div>
          </div>

          {/* Social and professional profile links */}
          <div className="about-social-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                aria-label={link.name}
                title={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={link.icon}
                  alt=""
                  aria-hidden="true"
                  className="about-social-icon"
                />
              </a>
            ))}

            {/* Email contact: opens the visitor's default email application */}
            <a
              href="mailto:pjsm.dev@protonmail.com"
              aria-label="Send me an email"
              title="Email"
            >
              <Mail size={20} strokeWidth={1.8} />
            </a>
          </div>
        </aside>

        {/* Right column: Personal introduction */}
        <div className="about-content">
          <div className="about-introduction">
            <span className="section-eyebrow">GET TO KNOW ME</span>

            <h2>About Me</h2>

            <p>
              My professional journey has taken me through different fields,
              from automotive manufacturing to software development. Along
              the way, I have developed a strong technical mindset, attention
              to detail, problem-solving skills and the ability to work under
              pressure.
            </p>

            <p>
              After completing the RE_Start Developer bootcamp, I focused on
              software development before pursuing my growing interest in
              cybersecurity, particularly Security Operations and threat
              investigation.
            </p>
          </div>

          {/* Professional experience and background */}
          <div className="about-background">
            <h3>Professional Background</h3>

            <ul>
              {professionalBackground.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Personal interests and activities outside professional work */}
          <div className="about-interests">
            <h3>Beyond the Code</h3>

            <ul>
              {beyondTheCode.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
