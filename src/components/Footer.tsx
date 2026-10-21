import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Heart, ArrowUp, ShieldCheck, Youtube } from 'lucide-react'
import {
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  YOUTUBE_VIDEO_URL,
  WHATSAPP_DISPLAY,
  EMAIL_DISPLAY,
  ADDRESS_DISPLAY,
  RAZAO_SOCIAL,
  CNPJ_DISPLAY,
  SLOGAN_PRINCIPAL,
  StudioLogo,
  getWhatsAppLink,
} from './StudioLogo'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1F3D33] text-white pt-16 pb-10 border-t border-[#2E5E4E] relative overflow-hidden">
      {/* Detalhe orgânico suave de fundo */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#2E5E4E]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#7FAF9C]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Coluna 1: Marca & Slogan */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <StudioLogo variant="footer" size="lg" />
            </div>

            <p className="font-heading font-semibold text-lg text-[#7FAF9C] tracking-wide">
              "{SLOGAN_PRINCIPAL}"
            </p>

            <p className="text-sm text-white/80 leading-relaxed max-w-sm font-light">
              Pilates contemporâneo, condicionamento físico, fisioterapia e plataforma vibratória
              com acolhimento humanizado, movimento inteligente e respeito aos seus limites.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold font-heading px-3 py-1 rounded-full bg-[#2E5E4E] text-white border border-[#7FAF9C]/30">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7FAF9C]" />
                Prof.ª Adriana Mello de Lima • CREF 013832-G/RJ
              </span>
            </div>

            {/* Redes Sociais Oficiais */}
            <div className="pt-2 flex flex-col gap-2">
              <span className="text-[11px] font-heading uppercase tracking-wider text-[#7FAF9C] font-semibold">
                Redes Oficiais
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram do BASE 6 STUDIO"
                  className="w-9 h-9 rounded-full bg-[#2E5E4E] border border-[#7FAF9C]/40 text-[#7FAF9C] hover:text-white hover:bg-[#7FAF9C]/25 hover:border-[#7FAF9C] flex items-center justify-center transition-all duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>

                <a
                  href={YOUTUBE_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube do BASE 6 STUDIO"
                  className="w-9 h-9 rounded-full bg-[#2E5E4E] border border-[#7FAF9C]/40 text-[#7FAF9C] hover:text-white hover:bg-[#7FAF9C]/25 hover:border-[#7FAF9C] flex items-center justify-center transition-all duration-200"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp do BASE 6 STUDIO"
                  className="w-9 h-9 rounded-full bg-[#2E5E4E] border border-[#7FAF9C]/40 text-[#7FAF9C] hover:text-white hover:bg-[#7FAF9C]/25 hover:border-[#7FAF9C] flex items-center justify-center transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-heading uppercase tracking-widest text-[#7FAF9C] font-bold">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-white/80 font-light">
              <li>
                <a href="/#inicio" className="hover:text-[#7FAF9C] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/#servicos" className="hover:text-[#7FAF9C] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/#principios" className="hover:text-[#7FAF9C] transition-colors">
                  Os 6 Princípios
                </a>
              </li>
              <li>
                <a href="/#depoimentos" className="hover:text-[#7FAF9C] transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="/#dicas-da-drica" className="hover:text-[#7FAF9C] transition-colors">
                  Dicas da Drica
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-[#7FAF9C] transition-colors">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
              <li>
                <a href="/#contato" className="hover:text-[#7FAF9C] transition-colors">
                  Fale com a Drica
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/painel"
                  className="hover:text-[#7FAF9C] transition-colors inline-flex items-center gap-1.5 text-white/60 text-xs font-medium"
                >
                  <span>Área da Equipe / Painel</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato & Localização Completa */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-heading uppercase tracking-widest text-[#7FAF9C] font-bold">
              Localização & Contato
            </h4>
            <div className="space-y-3 text-sm text-white/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#7FAF9C] shrink-0 mt-0.5" />
                <span className="leading-snug font-light text-xs sm:text-sm">
                  {ADDRESS_DISPLAY}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#7FAF9C] shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#7FAF9C] underline-offset-2 hover:underline transition-colors font-medium text-xs sm:text-sm"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#7FAF9C] shrink-0" />
                <a
                  href={`mailto:${EMAIL_DISPLAY}`}
                  className="hover:text-[#7FAF9C] underline-offset-2 hover:underline transition-colors font-medium text-xs sm:text-sm break-all"
                >
                  {EMAIL_DISPLAY}
                </a>
              </div>

              {/* Âncora textual visível para SEO / IA */}
              <div className="flex items-center gap-3 pt-1">
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-[#7FAF9C]"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <div className="text-xs sm:text-sm leading-snug">
                  <span className="text-white/80 font-light">Instagram:&nbsp;</span>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#7FAF9C] underline-offset-2 hover:underline transition-colors font-medium text-[#7FAF9C]"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                  <span className="text-white/60 font-light hidden sm:inline">
                    &nbsp;(Siga nosso dia a dia)
                  </span>
                </div>
              </div>
            </div>

            {/* Dados Fiscais Oficiais */}
            <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-white/65 space-y-0.5 font-light">
              <p className="font-medium text-white/80">{RAZAO_SOCIAL}</p>
              <p>CNPJ: {CNPJ_DISPLAY}</p>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/65">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            © {new Date().getFullYear()} BASE 6 STUDIO. Todos os direitos reservados. Cuidado
            <Heart className="w-3.5 h-3.5 text-[#7FAF9C] fill-current inline" />
            humano e movimento inteligente.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs text-[#7FAF9C] hover:text-white transition-colors cursor-pointer"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
export default Footer
