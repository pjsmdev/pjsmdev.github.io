import { CalendarDays } from 'lucide-react'
import Carousel from '../components/carousel/Carousel'
import '../styles/Writeups.css'

const writeups = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
]

const Writeups = () => {
  return (
    <section id="writeups" className="writeups-section">
      <div className="writeups-container">
        <div className="writeups-header">
          <span className="section-eyebrow">SECURITY RESEARCH</span>
          <h2>Writeups</h2>
          <p>
            Technical writeups documenting security challenges,
            investigations and practical learning experiences.
          </p>
        </div>

        <Carousel>
          {writeups.map((writeup) => (
            <article className="writeup-card" key={writeup.id}>
              <div className="writeup-image">
                <img
                  src="/images/writeups/writeup-placeholder.png"
                  alt="Writeup preview"
                />
              </div>

              <div className="writeup-content">
                <h3>Writeup Title</h3>

                <p className="writeup-description">
                  A short description of the writeup goes here.
                  Replace this text with a brief overview of the
                  challenge, investigation or topic covered.
                </p>

                <div className="writeup-technologies">
                  <span>Technology</span>
                  <span>Tool</span>
                  <span>Concept</span>
                </div>

                <div className="writeup-footer">
                  <div className="writeup-date">
                    <CalendarDays size={17} aria-hidden="true" />
                    <time dateTime="2026-11-25">
                      25 November 2026
                    </time>
                  </div>

                  {/* Add the writeup URL when available. */}
                  <a
                    href="#"
                    className="writeup-read-more"
                    aria-label="Read more about this writeup"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Writeups
