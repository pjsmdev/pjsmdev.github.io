const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>© {currentYear} Paulo Melo. All rights reserved.</p>

      <p>Built with React, TypeScript and Vite.</p>

      <p className="footer-attribution">
        Icons by{' '}
        <a
          href="https://fontawesome.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Font Awesome
        </a>
        , licensed under{' '}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY 4.0
        </a>
        .
      </p>
    </footer>
  )
}

export default Footer
