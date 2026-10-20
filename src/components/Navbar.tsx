import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react'
import { StudioLogo, getWhatsAppLink } from './StudioLogo'
import { Button } from '@/components/ui/button'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Início', href: '/#inicio' },
    { label: 'Serviços', href: '/#servicos' },
    { label: 'Depoimentos', href: '/#depoimentos' },
    { label: 'Contato', href: '/#contato' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === '/') {
      const hash = href.replace('/', '')
      if (hash.startsWith('#')) {
        e.preventDefault()
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    setMobileMenuOpen(false)
  }

  const agendarUrl = getWhatsAppLink(
    'Olá, Drica! Quero agendar uma aula experimental no BASE 6 STUDIO.',
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-[#C8E6C9]/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/#inicio" className="transition-transform hover:scale-[1.02] active:scale-95">
          <StudioLogo />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 bg-white/70 backdrop-blur-sm border border-[#C8E6C9]/70 px-6 py-2 rounded-full shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-[#1B3A1B]/80 hover:text-[#2E7D32] transition-colors relative py-1 hover:font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/painel"
            className="text-xs font-semibold text-[#4A7C59] hover:text-[#2E7D32] px-3 py-1.5 rounded-full hover:bg-[#C8E6C9]/30 transition-colors"
          >
            Área da Equipe
          </Link>
          <a
            href={agendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2E7D32] hover:bg-[#256629] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all hover:scale-[1.02] active:scale-95"
          >
            <span>Agendar</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={agendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#2E7D32] text-white shadow-xs"
            aria-label="Agendar via WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#1B3A1B] hover:bg-[#C8E6C9]/40 rounded-full"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-[#C8E6C9] shadow-lg animate-fade-in-down">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-semibold text-[#1B3A1B] hover:text-[#2E7D32] py-2 border-b border-gray-100"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/painel"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#4A7C59] py-2 border-b border-gray-100"
              >
                Painel Administrativo
              </Link>
            </nav>

            <a
              href={agendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 w-full bg-[#2E7D32] hover:bg-[#256629] text-white py-3 rounded-full font-semibold shadow-md text-center"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Agendar Aula no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
