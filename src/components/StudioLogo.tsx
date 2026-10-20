import React from 'react'

export const WHATSAPP_URL = 'https://wa.me/5521994448482'
export const WHATSAPP_DISPLAY = '(21) 99444-8482'
export const EMAIL_DISPLAY = 'basesixstudio@gmail.com'
export const ADDRESS_DISPLAY = 'Fonseca, Niterói — RJ'

export function getWhatsAppLink(
  mensagem = 'Olá, Drica! Quero agendar uma aula experimental no BASE 6 STUDIO.',
) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(mensagem)}`
}

export const StudioLogo: React.FC<{ className?: string; iconOnly?: boolean }> = ({
  className = '',
  iconOnly = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-[#81C784] to-[#2E7D32] shadow-sm text-white shrink-0">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-white"
        >
          {/* Folha estilizada e base orgânica */}
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      </div>
      {!iconOnly && (
        <div className="flex flex-col leading-none text-left">
          <span className="font-serif italic font-bold tracking-tight text-xl text-[#2E7D32]">
            BASE 6
          </span>
          <span className="text-[10px] tracking-[0.25em] font-semibold text-[#1B3A1B]/70 uppercase">
            STUDIO
          </span>
        </div>
      )}
    </div>
  )
}
