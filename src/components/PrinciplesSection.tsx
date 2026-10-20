import React from 'react'
import { Compass, Wind, Focus, Sliders, Target, Waves, Sparkles, ArrowRight } from 'lucide-react'
import { getWhatsAppLink } from '@/components/StudioLogo'

interface Principio {
  numero: string
  nome: string
  conceito: string
  descricao: string
  icone: React.ReactNode
}

export const PrinciplesSection: React.FC = () => {
  const principios: Principio[] = [
    {
      numero: '01',
      nome: 'Centro de Força',
      conceito: 'Powerhouse',
      descricao:
        'O núcleo do corpo de onde todo movimento se origina. Estabiliza a coluna, fortalece a musculatura profunda e sustenta a postura com segurança.',
      icone: <Compass className="w-5 h-5" />,
    },
    {
      numero: '02',
      nome: 'Respiração',
      conceito: 'Ritmo & Oxigenação',
      descricao:
        'Conduz cada movimento com calma. Oxigena os tecidos, reduz a ansiedade e ativa os músculos estabilizadores no tempo correto do seu corpo.',
      icone: <Wind className="w-5 h-5" />,
    },
    {
      numero: '03',
      nome: 'Concentração',
      conceito: 'Mente & Corpo',
      descricao:
        'Atenção plena ao que o corpo está realizando. Conectar intenção e ação transforma o exercício mecânico em consciência corporal duradoura.',
      icone: <Focus className="w-5 h-5" />,
    },
    {
      numero: '04',
      nome: 'Controle',
      conceito: 'Domínio Motor',
      descricao:
        'Nenhum movimento é por inércia ou pressa. O controle motor refinado previne lesões e devolve a confiança em cada articulação.',
      icone: <Sliders className="w-5 h-5" />,
    },
    {
      numero: '05',
      nome: 'Precisão',
      conceito: 'Qualidade sobre Quantidade',
      descricao:
        'Menos repetições exaustivas, mais perfeição biomecânica. Cada detalhe do alinhamento importa para uma evolução sólida e consistente.',
      icone: <Target className="w-5 h-5" />,
    },
    {
      numero: '06',
      nome: 'Fluidez',
      conceito: 'Harmonia Contínua',
      descricao:
        'A união graciosa entre força e leveza. Movimentos contínuos, sem choques e sem rigidez, trazendo liberdade para o seu dia a dia.',
      icone: <Waves className="w-5 h-5" />,
    },
  ]

  return (
    <section
      id="principios"
      className="py-20 bg-gradient-to-b from-[#FFFFFF] via-[#F4F8F6] to-[#FFFFFF] relative overflow-hidden"
    >
      {/* Detalhe orgânico suave */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-28 w-80 h-80 rounded-full bg-[#7FAF9C]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 -mr-28 w-80 h-80 rounded-full bg-[#2E5E4E]/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2EF] text-[#2E5E4E] text-xs font-heading font-semibold uppercase tracking-wider mb-3 border border-[#7FAF9C]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#2E5E4E]" />
            O Significado do 6
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1F3D33] leading-tight">
            Uma base. Seis princípios fundamentais.
          </h2>
          <p className="font-heading font-medium text-base text-[#2E5E4E] mt-3">
            "O numeral 6 no nosso nome é o coração do Método Pilates. Não é apenas técnica: é o
            nosso compromisso diário com o seu bem-estar."
            <span className="block text-xs font-bold font-heading text-[#7FAF9C] mt-1 uppercase tracking-wider">
              — Drica • Porta-voz BASE 6 STUDIO
            </span>
          </p>
        </div>

        {/* Grid com os 6 princípios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principios.map((p) => (
            <div
              key={p.numero}
              className="group bg-white rounded-[24px] p-7 border border-[#7FAF9C]/30 hover:border-[#2E5E4E] shadow-xs hover:shadow-organic transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF2EF] group-hover:bg-[#2E5E4E] text-[#2E5E4E] group-hover:text-white flex items-center justify-center transition-colors shadow-xs [&_svg]:transition-colors [&_svg]:currentColor">
                    {p.icone}
                  </div>
                  <span className="font-heading font-bold text-2xl text-[#7FAF9C] group-hover:text-[#2E5E4E] transition-colors">
                    {p.numero}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-heading uppercase tracking-wider font-semibold text-[#7FAF9C] block">
                    {p.conceito}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[#1F3D33] group-hover:text-[#2E5E4E] transition-colors">
                    {p.nome}
                  </h3>
                </div>

                <p className="text-sm text-[#1F3D33]/75 leading-relaxed font-normal">
                  {p.descricao}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#7FAF9C]/20 flex items-center justify-between text-xs text-[#2E5E4E] font-heading font-semibold">
                <span>Aplicado em cada sessão</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#7FAF9C]" />
              </div>
            </div>
          ))}
        </div>

        {/* Faixa complementar oficial */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 sm:px-6 rounded-2xl bg-[#EAF2EF] border border-[#7FAF9C]/40 text-sm text-[#1F3D33]">
            <span className="font-heading font-bold text-[#2E5E4E]">
              "Sua base forte: respira, controla, flui."
            </span>
            <span className="hidden sm:inline text-[#A0A0A0]">•</span>
            <span className="text-xs text-[#1F3D33]/80">
              Do core à fluidez, com controle, precisão e acolhimento humano.
            </span>
            <a
              href={getWhatsAppLink('Olá, Drica! Quero conhecer os 6 princípios na prática!')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-heading font-bold text-[#2E5E4E] hover:underline"
            >
              <span>Experimentar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default PrinciplesSection
