import React from 'react'
import { ArrowRight, Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react'
import { getWhatsAppLink } from '@/components/StudioLogo'

export const HeroSection: React.FC = () => {
  const agendarUrl = getWhatsAppLink(
    'Olá, Drica! Quero agendar uma aula experimental no BASE 6 STUDIO.',
  )

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById('servicos')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-[#E8F5E9] via-[#F1F8F1] to-[#F4F9F4]"
    >
      {/* Formas orgânicas SVG no fundo */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#C8E6C9]/40 to-[#81C784]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[450px] h-[450px] rounded-full bg-[#C8E6C9]/50 blur-3xl pointer-events-none" />

      {/* Onda orgânica sutil no rodapé da seção */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-white fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,30 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Lado Esquerdo: Conteúdo Textual */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            {/* Tag / Badge de Acolhida da Drica */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#81C784]/40 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-ping" />
              <span className="text-xs font-semibold text-[#2E7D32] tracking-wide">
                Estúdio de Pilates & Fisioterapia em Fonseca, Niterói
              </span>
            </div>

            {/* Título Principal em Serifa Itálica */}
            <h1 className="font-serif italic font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1B3A1B] leading-[1.15] tracking-tight">
              Transforme dor em saúde pelo{' '}
              <span className="text-[#2E7D32] underline decoration-[#81C784]/60 decoration-wavy decoration-2 underline-offset-8">
                movimento inteligente.
              </span>
            </h1>

            {/* Proposta de valor */}
            <p className="text-lg sm:text-xl text-[#1B3A1B]/85 font-normal leading-relaxed max-w-xl">
              Pilates contemporâneo, condicionamento físico e fisioterapia em Fonseca, Niterói — com
              atendimento humanizado que respeita o seu ritmo.
            </p>

            {/* Fala da Drica (Personagem Porta-voz) */}
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/95 border border-[#81C784]/30 shadow-subtle max-w-xl">
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#81C784] to-[#2E7D32] flex items-center justify-center text-white font-serif italic font-bold text-lg shadow-xs">
                  D
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#2E7D32] text-white p-0.5 rounded-full">
                  <Sparkles className="w-3 h-3" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#2E7D32] uppercase tracking-wider">
                  Drica • Porta-voz & Fisioterapeuta
                </span>
                <p className="font-serif italic text-sm text-[#1B3A1B] mt-0.5 leading-snug">
                  "Eu sou a Drica e estou aqui para te acolher nessa jornada. Cada corpo tem a sua
                  história, e a sua saúde começa pelo respeito a ela."
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href={agendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#2E7D32] hover:bg-[#256629] text-white px-7 py-4 rounded-full font-semibold text-base shadow-organic hover:shadow-organic-lg transition-all duration-200 hover:scale-[1.02] active:scale-98 text-center"
              >
                <span>Agendar aula experimental</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#servicos"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-[#2E7D32] border border-[#81C784]/60 px-6 py-4 rounded-full font-semibold text-base shadow-xs hover:shadow-sm transition-all text-center"
              >
                <span>Conhecer serviços</span>
              </a>
            </div>

            {/* Micro-benefícios rápidos */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-1 text-xs text-[#1B3A1B]/75">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                Atendimento individualizado
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                Ambiente tranquilo & acolhedor
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                Equipamentos modernos
              </span>
            </div>
          </div>

          {/* Lado Direito: Ilustração / Composição Orgânica */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {/* Círculos orgânicos decorativos */}
              <div className="absolute inset-0 rounded-[40%_60%_70%_30%/40%_50%_60%_55%] bg-gradient-to-tr from-[#C8E6C9] via-[#A5D6A7] to-[#81C784] opacity-70 animate-float-gentle shadow-organic" />
              <div className="absolute inset-4 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-white/70 backdrop-blur-xs border-2 border-white/80 shadow-inner" />

              {/* Elementos artísticos representativos do movimento */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-8">
                {/* SVG do movimento fluido e alinhamento da postura */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-44 h-44 text-[#2E7D32]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Cabeça */}
                  <circle cx="100" cy="40" r="14" fill="#2E7D32" />
                  {/* Linha da coluna / movimento orgânico de Pilates */}
                  <path d="M100 56 C95 80, 115 110, 85 130 C75 137, 65 145, 55 165" />
                  {/* Braço em extensão harmoniosa */}
                  <path d="M96 75 C120 70, 145 60, 160 45" />
                  <circle cx="160" cy="45" r="4" fill="#81C784" />
                  {/* Perna oposta em equilíbrio */}
                  <path d="M88 128 C115 135, 140 138, 165 140" />
                  {/* Arcos de energia e respiração */}
                  <path
                    d="M50 80 C40 100, 40 120, 50 140"
                    stroke="#81C784"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M150 90 C160 105, 160 120, 150 130"
                    stroke="#81C784"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Card flutuante sobre a ilustração */}
                <div className="mt-2 bg-white/95 rounded-2xl px-5 py-3 shadow-organic border border-[#C8E6C9]">
                  <p className="font-serif italic font-bold text-[#2E7D32] text-base">
                    Uma base. Seis princípios.
                  </p>
                  <p className="text-[11px] text-[#1B3A1B]/70 font-semibold uppercase tracking-wider">
                    Concentração • Controle • Centro • Fluidez • Precisão • Respiração
                  </p>
                </div>
              </div>

              {/* Badge flutuante: Fonseca, Niterói */}
              <div className="absolute -bottom-3 -right-2 sm:right-2 bg-white rounded-2xl p-3 shadow-organic border border-[#81C784]/40 z-20 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#1B3A1B]">Fonseca • Niterói</p>
                  <p className="text-[10px] text-[#4A7C59]">Fácil acesso na Zona Norte</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de rolagem no rodapé do Hero */}
        <div className="mt-14 flex justify-center">
          <a
            href="#servicos"
            onClick={scrollToServices}
            aria-label="Rolar para os serviços"
            className="flex flex-col items-center gap-1 text-xs text-[#2E7D32]/80 hover:text-[#2E7D32] transition-colors group"
          >
            <span className="font-medium tracking-wide">Descubra nossos serviços</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
