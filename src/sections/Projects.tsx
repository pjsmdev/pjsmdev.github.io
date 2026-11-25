import Carousel from '../components/carousel/Carousel'
import '../styles/Projects.css'

const projects = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
]

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-eyebrow">SELECTED WORK</span>
          <h2>Projects</h2>
          <p>
            A collection of projects showcasing technical skills,
            problem-solving and practical experience.
          </p>
        </div>

        <Carousel>
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-image">
                <img
                  src="/images/projects/project-placeholder.png"
                  alt="Project preview placeholder"
                />
              </div>

              <div className="project-content">
                <h3>Project Title</h3>

                <p className="project-description">
                  Project description goes here. Replace this text
                  with a brief overview of the project.
                </p>

                <div className="project-technologies">
                  <span>Technology</span>
                  <span>Tool</span>
                  <span>Concept</span>
                </div>

                <div className="project-actions">
                  {/* Add the GitHub repository URL when available. */}
                  <a
                    href="#"
                    className="project-source-button"
                    aria-label="Source Code"
                  >
                    <img
                      src="/images/icons/square-github-brands-solid-full.svg"
                      alt=""
                    />
                    Source Code
                  </a>

                  {/* Uncomment when a live deployment is available.
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-view-button"
                  >
                    View Project
                  </a>
                  */}
                </div>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Projects
