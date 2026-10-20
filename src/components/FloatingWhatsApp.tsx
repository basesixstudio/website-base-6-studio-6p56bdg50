import React from 'react'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from './StudioLogo'

export const FloatingWhatsApp: React.FC = () => {
  const url = getWhatsAppLink('Olá, Drica! Quero agendar uma aula experimental.')

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50 group">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Drica pelo WhatsApp (21) 99444-8482"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-full shadow-organic-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-sm font-semibold tracking-wide hidden sm:inline">
          Falar com a Drica
        </span>
      </a>
    </aside>
  )
}
