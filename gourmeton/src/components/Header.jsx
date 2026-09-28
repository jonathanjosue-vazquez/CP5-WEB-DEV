import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Pratos', href: '#pratos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Ajusta a aparência do header (sombra/fundo) conforme o usuário rola a página.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setIsMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur shadow-md py-2' : 'bg-white/80 backdrop-blur py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <a href="#hero" className="font-extrabold text-xl text-brand-dark">
          Gourmet<span className="text-brand-orange">On</span>
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-dark/80 hover:text-brand-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pratos"
            className="bg-brand-orange text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-brand-orangeDark transition-colors"
          >
            Peça agora
          </a>
        </nav>

        {/* Botão do menu mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={`block h-0.5 w-6 bg-brand-dark transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-brand-dark transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-brand-dark transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-brand-orangeLight px-5 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-sm font-medium text-brand-dark/80 hover:text-brand-orange"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pratos"
            onClick={handleLinkClick}
            className="bg-brand-orange text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center"
          >
            Peça agora
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header
