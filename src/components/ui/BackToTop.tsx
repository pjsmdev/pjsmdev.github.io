import { ArrowUp } from 'lucide-react'
import '../../styles/BackToTop.css'

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  )
}

export default BackToTop
