import React, { useState, useEffect } from 'react'
import { Star, Quote, Sparkles } from 'lucide-react'

interface Depoimento {
  id: string
  nome: string
  bairro: string
  texto: string
  estrelas: number
  tempo: string
}

export const SocialProofSection: React.FC = () => {
  const [countAlunos, setCountAlunos] = useState(0)
  const [countAnos, setCountAnos] = useState(0)
  const [countSat, setCountSat] = useState(0)

  // Animação suave dos números ao carregar
  useEffect(() => {
    const duration = 1400
    const steps = 35
    const stepTime = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = Math.min(currentStep / steps, 1)

      setCountAlunos(Math.floor(progress * 500))
      setCountAnos(Math.floor(progress * 12))
      setCountSat(Math.floor(progress * 98))

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [])

  const depoimentos: Depoimento[] = [
    {
      id: '1',
      nome: 'Camila Peixoto',
      bairro: 'Fonseca, Niterói',
      texto:
        'Cheguei ao BASE 6 travada por uma dor lombar crônica. O olhar atento da Drica e a paciência nos exercícios devolveram minha mobilidade e a alegria de me movimentar sem medo.',
      estrelas: 5,
      tempo: 'Aluna há 2 anos',
    },
    {
      id: '2',
      nome: 'Eduardo Martins',
      bairro: 'Icaraí, Niterói',
      texto:
        'A estrutura é impecável e o ambiente muito acolhedor. A combinação de Pilates com a plataforma vibratória me deu uma disposição física que eu não tinha há anos.',
      estrelas: 5,
      tempo: 'Aluno há 8 meses',
    },
    {
      id: '3',
      nome: 'Helena Vasconcelos',
      bairro: 'Santa Rosa, Niterói',
      texto:
        'Não é só sobre exercício, é sobre cuidado de verdade. A Drica adapta cada detalhe à sua respiração e limitações. Me sinto ouvida, respeitada e muito mais forte.',
      estrelas: 5,
      tempo: 'Aluna há 1 ano e meio',
    },
  ]

  return (
    <section id="depoimentos" className="py-20 bg-[#F4F8F6] relative overflow-hidden">
      {/* Elementos orgânicos de fundo na nova paleta */}
      <div className="absolute top-10 -left-20 w-72 h-72 rounded-full bg-[#7FAF9C]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-[#2E5E4E]/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-[#2E5E4E] text-xs font-heading font-semibold uppercase tracking-wider mb-3 shadow-xs border border-[#7FAF9C]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#2E5E4E]" />
            Depoimentos & Conquistas
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1F3D33] leading-tight">
            Quem já transformou sua rotina nesta base
          </h2>
          <p className="font-heading font-medium text-base text-[#2E5E4E] mt-3">
            Histórias reais de pessoas que transformaram dores em saúde, força e autonomia.
          </p>
        </div>

        {/* Números em Destaque (Contadores Animados) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-[24px] p-6 text-center border border-[#7FAF9C]/40 shadow-organic">
            <div className="font-heading font-bold text-4xl sm:text-5xl text-[#2E5E4E]">
              {countAlunos}+
            </div>
            <p className="text-sm font-heading font-semibold text-[#1F3D33] mt-2">
              Alunos atendidos
            </p>
            <p className="text-xs text-[#2E5E4E]">Vidas transformadas pelo movimento consciente</p>
          </div>

          <div className="bg-white rounded-[24px] p-6 text-center border border-[#7FAF9C]/40 shadow-organic">
            <div className="font-heading font-bold text-4xl sm:text-5xl text-[#2E5E4E]">
              {countAnos} anos
            </div>
            <p className="text-sm font-heading font-semibold text-[#1F3D33] mt-2">
              De experiência clínica
            </p>
            <p className="text-xs text-[#2E5E4E]">
              Prática cinesiológica e aperfeiçoamento contínuo
            </p>
          </div>

          <div className="bg-white rounded-[24px] p-6 text-center border border-[#7FAF9C]/40 shadow-organic">
            <div className="font-heading font-bold text-4xl sm:text-5xl text-[#2E5E4E]">
              {countSat}%
            </div>
            <p className="text-sm font-heading font-semibold text-[#1F3D33] mt-2">De satisfação</p>
            <p className="text-xs text-[#2E5E4E]">
              Relato espontâneo de alívio e qualidade de vida
            </p>
          </div>
        </div>

        {/* Cards de Depoimento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {depoimentos.map((dep) => (
            <div
              key={dep.id}
              className="bg-white rounded-[24px] p-7 border border-[#7FAF9C]/30 shadow-subtle hover:shadow-organic transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Aspas decorativas e Estrelas */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#EAF2EF] flex items-center justify-center text-[#2E5E4E]">
                    <Quote className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: dep.estrelas }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F9A825] text-[#F9A825]" />
                    ))}
                  </div>
                </div>

                {/* Texto do depoimento em Open Sans */}
                <p className="text-sm sm:text-base text-[#1F3D33]/85 leading-relaxed mb-6 font-normal">
                  "{dep.texto}"
                </p>
              </div>

              {/* Informações do cliente */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-semibold text-sm text-[#1F3D33]">{dep.nome}</h4>
                  <p className="text-xs text-[#7FAF9C]">{dep.bairro}</p>
                </div>
                <span className="text-[11px] font-heading font-semibold text-[#2E5E4E] bg-[#EAF2EF] px-2.5 py-1 rounded-full">
                  {dep.tempo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Frase da Drica em Destaque do Manual */}
        <div className="max-w-3xl mx-auto text-center bg-white border border-[#7FAF9C]/40 rounded-[28px] p-6 sm:p-8 shadow-organic">
          <p className="font-heading font-semibold text-xl sm:text-2xl text-[#1F3D33] leading-relaxed">
            "Sua dor não define você: ela é apenas o ponto de partida da sua evolução."
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="w-6 h-[1.5px] bg-[#7FAF9C]" />
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#2E5E4E]">
              Drica • Porta-voz BASE 6 STUDIO
            </span>
            <span className="w-6 h-[1.5px] bg-[#7FAF9C]" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default SocialProofSection
