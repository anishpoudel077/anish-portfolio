'use client'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-slate-600/30">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-text-primary hover:text-primary transition-colors">
          Anish Poudel
        </a>
        
        <div className="flex items-center gap-6">
          <a
            href="/Resume-Anish.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors font-medium"
          >
            Resume
          </a>
          <a
            href="mailto:poudelanish077@gmail.com"
            className="text-text-secondary hover:text-primary transition-colors font-medium"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/anish-poudel077/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors font-medium"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  )
}
