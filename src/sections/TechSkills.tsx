import {
  Code2,
  Layers,
  Network,
  ShieldCheck,
} from 'lucide-react'

import '../styles/TechSkills.css'

const skillCategories = [
  {
    title: 'Programming & Scripting',
    icon: Code2,
    skills: ['Python', 'C#', 'TypeScript', 'Java', 'Bash'],
  },
  {
    title: 'Development Technologies',
    icon: Layers,
    skills: ['React', 'Angular', '.NET', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    title: 'Systems & Networking',
    icon: Network,
    skills: ['Linux', 'Windows', 'Networking', 'TCP/IP', 'DNS'],
  },
  {
    title: 'Security Tools & Platforms',
    icon: ShieldCheck,
    skills: [
      'Wireshark',
      'Nmap',
      'Wazuh',
      'TryHackMe',
      'Hack The Box',
      'CyberDefenders',
    ],
  },
]

const TechSkills = () => {
  return (
    <section id="skills" className="tech-skills-section">
      <div className="tech-skills-container">
        <div className="tech-skills-header">
          <span className="section-eyebrow">TECHNICAL EXPERTISE</span>
          <h2>Technical Skills</h2>
        </div>

        <div className="tech-skills-grid">
          {skillCategories.map((category) => {
            const Icon = category.icon

            return (
              <article
                className="tech-skill-card"
                key={category.title}
              >
                <div className="tech-skill-card-header">
                  <Icon className="tech-skill-icon" size={24} />
                  <h3>{category.title}</h3>
                </div>

                <div className="tech-skill-list">
                  {category.skills.map((skill) => (
                    <span className="tech-skill-badge" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechSkills
