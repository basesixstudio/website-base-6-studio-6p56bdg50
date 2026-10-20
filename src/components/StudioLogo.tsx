import React from 'react'
import logoOficial from '@/assets/logo-base-6-studio-verde-0c93f.png'

export const WHATSAPP_URL = 'https://wa.me/5521994448482'
export const WHATSAPP_DISPLAY = '(21) 99444-8482'
export const EMAIL_DISPLAY = 'basesixstudio@gmail.com'
export const ADDRESS_DISPLAY =
  'Rua Desembargador Lima Castro, nº 126, Lojas 101 e 102, Fonseca, Niterói/RJ, CEP 24.120-350'
export const ADDRESS_SHORT = 'Fonseca, Niterói — RJ'
export const RAZAO_SOCIAL = 'A Mello de Lima Centro de Condicionamento Físico LTDA ME'
export const CNPJ_DISPLAY = '69.476.157/0001-94'
export const SLOGAN_PRINCIPAL = 'Uma base. Seis princípios.'
export const MENSAGEM_AGENDAMENTO_PADRAO =
  'Olá! Vim pelo site do BASE 6 STUDIO e gostaria de agendar uma aula experimental. 🌿'

export function getWhatsAppLink(mensagem = MENSAGEM_AGENDAMENTO_PADRAO) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(mensagem)}`
}

interface StudioLogoProps {
  className?: string
  iconOnly?: boolean
  variant?: 'default' | 'inverted' | 'footer'
  size?: 'sm' | 'md' | 'lg'
}

export const StudioLogo: React.FC<StudioLogoProps> = ({
  className = '',
  iconOnly = false,
  variant = 'default',
  size = 'md',
}) => {
  const isInverted = variant === 'inverted' || variant === 'footer'

  const imgSizeClass = size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-14 h-14' : 'w-11 h-11'

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Imagem oficial do logotipo: círculo aberto BASE 6 STUDIO */}
      <div
        className={`relative flex items-center justify-center rounded-full shrink-0 overflow-hidden ${
          isInverted ? 'bg-white p-1 shadow-md ring-2 ring-[#7FAF9C]/30' : 'bg-transparent'
        }`}
      >
        <img
          src={logoOficial}
          alt="BASE 6 STUDIO - Logotipo Oficial"
          className={`${imgSizeClass} object-contain select-none`}
          loading="eager"
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col leading-none text-left">
          <span
            className={`font-heading font-bold tracking-tight ${
              size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-lg' : 'text-xl'
            } ${isInverted ? 'text-white' : 'text-[#2E5E4E]'}`}
          >
            BASE 6
          </span>
          <span
            className={`font-heading text-[10px] tracking-[0.28em] font-semibold uppercase mt-0.5 ${
              isInverted ? 'text-[#7FAF9C]' : 'text-[#1F3D33]/70'
            }`}
          >
            STUDIO
          </span>
        </div>
      )}
    </div>
  )
}
export default StudioLogo
