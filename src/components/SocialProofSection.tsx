import React, { useState, useEffect } from 'react'
import { Star, Quote, Sparkles } from 'lucide-react'

interface Depoimento {
  id: string
  nome: string
  texto: string
  estrelas: number
}

export const SocialProofSection: React.FC = () => {
  const [countPilates, setCountPilates] = useState(0)
  const [countEdFisica, setCountEdFisica] = useState(0)
  const [countAlunos, setCountAlunos] = useState(0)
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

      setCountPilates(Math.floor(progress * 20))
      setCountEdFisica(Math.floor(progress * 23))
      setCountAlunos(Math.floor(progress * 500))
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
      nome: 'Flávia M.',
      texto:
        'Melhor espaço de pilates de Niterói.  Professores atenciosos e muito competentes. A Adriana é sensacional! Eu e minha família somos fãs!!',
      estrelas: 5,
    },
    {
      id: '2',
      nome: 'Liane S.',
      texto: 'Lugar maravilhoso, professora espetacular, ambiente acolhedor. Super recomendo.',
      estrelas: 5,
    },
    {
      id: '3',
      nome: 'Tania M. G.',
      texto:
        'Experiência gratificante. Profissionais de qualidade. Espaço amplo. Base 6 Studio merece nota 10.',
      estrelas: 5,
    },
    {
      id: '4',
      nome: 'Vera L.',
      texto: 'Ambiente agradabilíssimo, com uma instrutora mais do que capacitada e muito amiga.',
      estrelas: 5,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-[24px] p-6 text-center border border-[#7FAF9C]/40 shadow-organic flex flex-col justify-between">
            <div>
              <div className="font-heading font-bold text-4xl sm:text-5xl text-[#2E5E4E]">
                {countPilates} anos
              </div>
              <p className="text-sm font-heading font-semibold text-[#1F3D33] mt-2">de Pilates</p>
            </div>
            <p className="text-xs text-[#2E5E4E] mt-1">
              Prática dedicada e aperfeiçoamento constante
            </p>
          </div>

          <div className="bg-white rounded-[24px] p-6 text-center border border-[#7FAF9C]/40 shadow-organic flex flex-col justify-between">
            <div>
              <div className="font-heading font-bold text-4xl sm:text-5xl text-[#2E5E4E]">
                {countEdFisica} anos
              </div>
              <p className="text-sm font-heading font-semibold text-[#1F3D33] mt-2">
                como Profissional de Educação Física
              </p>
            </div>
            <p className="text-xs text-[#2E5E4E] mt-1">Com foco na melhor idade</p>
          </div>

          <div className="bg-white rounded-[24px] p-6 text-center border border-[#7FAF9C]/40 shadow-organic flex flex-col justify-between">
            <div>
              <div className="font-heading font-bold text-4xl sm:text-5xl text-[#2E5E4E]">
                {countAlunos}+
              </div>
              <p className="text-sm font-heading font-semibold text-[#1F3D33] mt-2">alunos</p>
            </div>
            <p className="text-xs text-[#2E5E4E] mt-1">
              Vidas transformadas pelo movimento consciente
            </p>
          </div>

          <div className="bg-white rounded-[24px] p-6 text-center border border-[#7FAF9C]/40 shadow-organic flex flex-col justify-between">
            <div>
              <div className="font-heading font-bold text-4xl sm:text-5xl text-[#2E5E4E]">
                {countSat}%
              </div>
              <p className="text-sm font-heading font-semibold text-[#1F3D33] mt-2">
                de satisfação
              </p>
            </div>
            <p className="text-xs text-[#2E5E4E] mt-1">
              Relato espontâneo de alívio e qualidade de vida
            </p>
          </div>
        </div>

        {/* Cards de Depoimento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
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
                  <p className="text-xs text-[#7FAF9C]">Aluno(a) BASE 6 STUDIO</p>
                </div>
                <span className="text-[11px] font-heading font-semibold text-[#2E5E4E] bg-[#EAF2EF] px-2.5 py-1 rounded-full">
                  Avaliação 5 estrelas
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
