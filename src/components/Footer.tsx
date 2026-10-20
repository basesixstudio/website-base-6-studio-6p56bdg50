import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Heart, ArrowUp } from 'lucide-react'
import {
  WHATSAPP_DISPLAY,
  EMAIL_DISPLAY,
  ADDRESS_DISPLAY,
  StudioLogo,
  getWhatsAppLink,
} from './StudioLogo'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1B3A1B] text-white pt-16 pb-10 border-t border-[#2E7D32]/30 relative overflow-hidden">
      {/* Detalhe orgânico de fundo */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#2E7D32]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#81C784]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Coluna 1: Marca & Slogan */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <StudioLogo />
            </div>
            <p className="font-serif italic text-lg text-[#C8E6C9]">"Uma base. Seis princípios."</p>
            <p className="text-sm text-white/75 leading-relaxed max-w-sm">
              Pilates contemporâneo, condicionamento físico e fisioterapia com foco no movimento
              inteligente, saúde integral e respeito ao ritmo de cada corpo.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#2E7D32]/60 text-[#C8E6C9] border border-[#81C784]/30">
                Acolhimento com a Drica
              </span>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-widest text-[#81C784] font-bold">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="/#inicio" className="hover:text-[#C8E6C9] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/#servicos" className="hover:text-[#C8E6C9] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/#depoimentos" className="hover:text-[#C8E6C9] transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="/#contato" className="hover:text-[#C8E6C9] transition-colors">
                  Fale Conosco
                </a>
              </li>
              <li>
                <Link
                  to="/painel"
                  className="hover:text-[#C8E6C9] transition-colors inline-flex items-center gap-1.5 text-white/60 text-xs mt-2"
                >
                  <span>Acesso da Equipe</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato & Localização */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-widest text-[#81C784] font-bold">
              Onde Estamos
            </h4>
            <div className="space-y-3 text-sm text-white/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#81C784] shrink-0 mt-0.5" />
                <span>{ADDRESS_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#81C784] shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C8E6C9] underline-offset-2 hover:underline transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#81C784] shrink-0" />
                <a
                  href={`mailto:${EMAIL_DISPLAY}`}
                  className="hover:text-[#C8E6C9] underline-offset-2 hover:underline transition-colors"
                >
                  {EMAIL_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} BASE 6 STUDIO. Todos os direitos reservados. Feito com
            <Heart className="w-3.5 h-3.5 text-[#81C784] fill-current inline" />
            para sua saúde.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs text-[#C8E6C9] hover:text-white transition-colors"
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
