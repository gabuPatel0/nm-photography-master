export default function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer>
        <div className="wrapper">
            <div className="flex flex-col sm:items-center md:flex-row md:justify-between gap-8">
                <p>&copy; {currentYear} NM Photography.</p>
                <div className="flex gap-6">
                    <a href="" target="_blank" aria-label="Visit Instagram page">
                        Instagram
                    </a>
                    <a href="" target="_blank" aria-label="Visit Facebook page">
                        Facebook
                    </a>
                    <a href="" target="_blank" aria-label="Visit Unsplash portfolio">
                        Unsplash
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}