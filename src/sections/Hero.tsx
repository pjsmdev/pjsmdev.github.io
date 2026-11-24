import '../styles/Hero.css'

import {
  Activity,
  BrainCircuit,
  Search,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
} from 'lucide-react'

const focusAreas = [
  {
    icon: Activity,
    title: 'Security Monitoring',
    description: 'Continuous Alert & Event Monitoring',
  },
  {
    icon: BrainCircuit,
    title: 'Threat Intelligence',
    description: 'Web, Social Media & Deep/Dark Web Monitoring',
  },
  {
    icon: Search,
    title: 'Threat Investigation',
    description: 'Exposed Credentials, Fake Profiles & Data Leaks',
  },
  {
    icon: ShieldCheck,
    title: 'Incident Response',
    description: 'Alert Triage, Escalation & Incident Support',
  },
]

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-introduction">
          <span className="hero-eyebrow">
            FULL STACK DEVELOPMENT | CYBERSECURITY
          </span>

          <h1 id="hero-title">Paulo Melo</h1>

          <h2>
            Software Development Background.
            <br />
            Cybersecurity Focus.
          </h2>

          <p>
            Bringing a software development background into cybersecurity,
            with a focus on Security Operations, threat detection and
            incident investigation.
          </p>

          <div className="hero-actions">
            <a href="/projects" className="hero-button hero-button-primary">
              Explore My Work
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="hero-button hero-button-secondary">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-focus-panel">
          <h3>SOC Focus Areas</h3>

          <div className="focus-list">
            {focusAreas.map((area) => {
              const Icon = area.icon

              return (
                <div className="focus-item" key={area.title}>
                  <div className="focus-icon">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <div className="focus-details">
                    <h4>{area.title}</h4>
                    <p>{area.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to About">
        <ChevronDown size={20} />
        <span>Scroll to discover</span>
      </a>
    </section>
  )
}

export default Hero
