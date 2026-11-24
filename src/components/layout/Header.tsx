import { ShieldCheck, Download } from 'lucide-react'

const Header = () => {
  return (
    <header className="site-header">
      <a href="/" className="header-brand" aria-label="Paulo Melo - Home">
        <ShieldCheck size={28} strokeWidth={1.8} />
        <span>Paulo Melo</span>
      </a>

      <nav className="header-navigation" aria-label="Main navigation">
        <a href="/#about">About</a>
        <a href="/#skills">Skills</a>
        <a href="/projects">Projects</a>
        <a href="/writeups">Writeups</a>
        <a href="/#certifications">Certifications</a>
        <a href="/#contact">Contact</a>
      </nav>

      <a href="/cv.pdf" className="header-cv" download>
        <Download size={16} />
        <span>Download CV</span>
      </a>
    </header>
  )
}

export default Header
