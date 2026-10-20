import React from 'react'
import { ArrowRight, Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react'
import { getWhatsAppLink, SLOGAN_PRINCIPAL } from '@/components/StudioLogo'
import dricaFoto from '@/assets/dricaacenando-b8441.png'

export const HeroSection: React.FC = () => {
  const agendarUrl = getWhatsAppLink()

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
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-[#F4F8F6] via-[#FFFFFF] to-[#EAF2EF]"
    >
      {/* Formas orgânicas suaves no fundo com paleta oficial */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#7FAF9C]/25 to-[#2E5E4E]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[450px] h-[450px] rounded-full bg-[#7FAF9C]/20 blur-3xl pointer-events-none" />

      {/* Linha orgânica suave no rodapé da seção */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 text-white fill-current"
        >
          <path d="M0,0 C150,80 350,-30 500,40 C650,110 900,10 1200,25 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Lado Esquerdo: Conteúdo Textual com Montserrat + Open Sans */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            {/* Tag / Badge Institucional */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#7FAF9C]/40 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#2E5E4E] animate-ping" />
              <span className="text-xs font-semibold font-heading text-[#2E5E4E] tracking-wide">
                Fonseca, Niterói • {SLOGAN_PRINCIPAL}
              </span>
            </div>

            {/* Título Principal em Montserrat Bold/SemiBold */}
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1F3D33] leading-[1.12] tracking-tight">
              Transforme dor em saúde pelo{' '}
              <span className="text-[#2E5E4E] relative inline-block">
                movimento inteligente.
                <span className="absolute left-0 bottom-1 w-full h-2 bg-[#7FAF9C]/30 -z-10 rounded-full" />
              </span>
            </h1>

            {/* Proposta de valor em Open Sans */}
            <p className="text-lg sm:text-xl text-[#1F3D33]/85 font-normal leading-relaxed max-w-xl">
              Sua dor não define você: ela é o ponto de partida da sua evolução. Pilates
              contemporâneo, condicionamento físico, fisioterapia e plataforma vibratória com
              cuidado humano no Fonseca, Niterói.
            </p>

            {/* Fala da Drica (Porta-Voz Oficial) - Acolhedora, Didática e Encorajadora */}
            <div className="flex items-start gap-3.5 p-4 sm:p-4.5 rounded-2xl bg-white/95 border border-[#7FAF9C]/40 shadow-subtle max-w-xl">
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#2E5E4E] shadow-xs bg-[#2E5E4E]/10">
                  <img
                    src={dricaFoto}
                    alt="Drica - Porta-voz oficial do BASE 6 STUDIO"
                    className="w-full h-full object-cover object-[50%_15%]"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#2E5E4E] text-white p-0.5 rounded-full shadow-xs">
                  <Sparkles className="w-3 h-3" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold font-heading text-[#2E5E4E] uppercase tracking-wider">
                  Drica • Porta-voz & Profissional de Educação Física
                </span>
                <p className="text-sm text-[#1F3D33] mt-0.5 leading-relaxed">
                  "Olá! Sou a Drica. Aqui no BASE 6 STUDIO, cada corpo tem sua história e cada
                  conquista é celebrada com segurança, respeito e carinho. Vem construir sua base
                  forte com a gente!"
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href={agendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#2E5E4E] hover:bg-[#1F3D33] text-white px-7 py-4 rounded-full font-semibold font-heading text-base shadow-organic hover:shadow-organic-lg transition-all duration-200 hover:scale-[1.02] active:scale-98 text-center"
              >
                <span>Agendar aula experimental</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#servicos"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F4F8F6] text-[#2E5E4E] border border-[#7FAF9C]/60 px-6 py-4 rounded-full font-semibold font-heading text-base shadow-xs hover:shadow-sm transition-all text-center"
              >
                <span>Conhecer modalidades</span>
              </a>
            </div>

            {/* Micro-benefícios rápidos */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-1 text-xs text-[#1F3D33]/75 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E5E4E]" />
                Atendimento individualizado
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E5E4E]" />
                Educação Física & Fisioterapia em sinergia
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E5E4E]" />
                Ambiente acolhedor no Fonseca
              </span>
            </div>
          </div>

          {/* Lado Direito: Foto Oficial da Personagem Drica ao lado do Reformer */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-md flex flex-col items-center">
              {/* Moldura orgânica de fundo com as cores oficiais */}
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-tr from-[#7FAF9C]/30 via-[#EAF2EF] to-[#2E5E4E]/20 -rotate-2 transform scale-105 pointer-events-none" />

              {/* Card principal com a foto oficial da Drica */}
              <div className="relative z-10 w-full overflow-hidden rounded-[32px] border-2 border-white shadow-organic bg-white group">
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#2E5E4E]/5">
                  {/* Recorte preciso para excluir o rodapé da imagem (texto com endereço e logotipo embutidos na parte inferior do PNG) mantendo Drica e o Reformer em destaque */}
                  <img
                    src={dricaFoto}
                    alt="Drica, porta-voz oficial do BASE 6 STUDIO, acenando ao lado do aparelho Reformer de Pilates"
                    className="w-full h-[112%] max-w-none object-cover object-[center_top] -mb-[12%] select-none transition-transform duration-500 group-hover:scale-[1.03] origin-top"
                    loading="eager"
                  />
                </div>

                {/* Slogan complementar sobreposto na base da foto */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#1F3D33]/95 via-[#1F3D33]/75 to-transparent text-white pt-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-heading font-bold text-sm text-white">Drica no Reformer</p>
                      <p className="text-[11px] text-[#7FAF9C] font-medium">
                        "Aqui, movimento, saúde e cuidado caminham juntos."
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#2E5E4E]/80 backdrop-blur-xs text-[10px] font-heading font-bold tracking-wider uppercase text-white border border-[#7FAF9C]/40">
                      Base 6
                    </span>
                  </div>
                </div>
              </div>

              {/* Badge flutuante destacando Fonseca • Niterói */}
              <div className="absolute -bottom-4 -left-2 sm:left-2 bg-white rounded-2xl p-3 shadow-organic border border-[#7FAF9C]/40 z-20 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#EAF2EF] flex items-center justify-center text-[#2E5E4E]">
                  <Sparkles className="w-4 h-4 text-[#2E5E4E]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-heading font-bold text-[#1F3D33]">
                    Fonseca • Niterói/RJ
                  </p>
                  <p className="text-[10px] text-[#2E5E4E] font-medium">
                    Rua Des. Lima Castro, 126
                  </p>
                </div>
              </div>

              {/* Badge flutuante de acolhimento além da técnica */}
              <div className="absolute -top-3 -right-2 bg-white rounded-full px-3.5 py-1.5 shadow-organic border border-[#7FAF9C]/40 z-20 hidden sm:flex items-center gap-1.5 text-[11px] font-heading font-semibold text-[#2E5E4E]">
                <span>Acolhimento além da técnica</span>
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
            className="flex flex-col items-center gap-1 text-xs text-[#2E5E4E]/80 hover:text-[#2E5E4E] transition-colors group cursor-pointer"
          >
            <span className="font-heading font-medium tracking-wide">Descubra nossos serviços</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
export default HeroSection
