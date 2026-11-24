const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>© {currentYear} Paulo Melo. All rights reserved.</p>
    </footer>
  )
}

export default Footer
