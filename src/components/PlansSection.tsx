import React from 'react'
import { Activity, Zap, Sparkles, CheckCircle2, Calendar, MessageCircle, Check } from 'lucide-react'
import { getWhatsAppLink } from '@/components/StudioLogo'

interface FrequenciaOpcao {
  frequencia: string
  observacao?: string
}

interface ModalidadePlano {
  id: string
  titulo: string
  subtituloModalidade: string
  descricao: string
  icone: React.ReactNode
  destaque?: boolean
  badge?: string
  frequencias: FrequenciaOpcao[]
  whatsappMsg: string
  beneficiosInclusos: string[]
}

export const PlansSection: React.FC = () => {
  const modalidades: ModalidadePlano[] = [
    {
      id: 'pilates',
      titulo: 'Pilates',
      subtituloModalidade: 'Pilates em Aparelhos',
      descricao:
        'Aulas personalizadas com foco em fortalecimento do core, alinhamento postural, flexibilidade e reabilitação motora.',
      icone: <Activity className="w-6 h-6 text-[#2E5E4E]" />,
      frequencias: [
        {
          frequencia: '1x por semana',
          observacao: 'Somente às Sextas-Feiras',
        },
        {
          frequencia: '2x por semana',
        },
        {
          frequencia: '3x por semana',
        },
      ],
      whatsappMsg:
        'Olá! Vim pelo site do BASE 6 STUDIO e gostaria de saber mais sobre o plano de Pilates. 🌿',
      beneficiosInclusos: [
        'Aparelhos completos (Reformer, Cadillac, Cadeira, Barril)',
        'Atendimento individualizado e turmas reduzidas',
        'Acompanhamento contínuo da sua evolução',
      ],
    },
    {
      id: 'plataforma',
      titulo: 'Plataforma Vibratória',
      subtituloModalidade: 'Whole Body Vibration (WBV)',
      descricao:
        'Tecnologia de vibração de corpo inteiro que estimula reflexos neuromusculares, densidade óssea, equilíbrio e circulação.',
      icone: <Zap className="w-6 h-6 text-[#2E5E4E]" />,
      frequencias: [
        {
          frequencia: '1x por semana',
          observacao: 'Somente às Sextas-Feiras',
        },
        {
          frequencia: '2x por semana',
        },
        {
          frequencia: '3x por semana',
        },
      ],
      whatsappMsg:
        'Olá! Vim pelo site do BASE 6 STUDIO e gostaria de saber mais sobre o plano de Plataforma Vibratória. 🌿',
      beneficiosInclusos: [
        'Equipamento profissional de alta precisão biomecânica',
        'Acompanhamento e ajuste de frequência individual',
        'Sessões dinâmicas, eficientes e de baixo impacto',
      ],
    },
    {
      id: 'pilates-plataforma',
      titulo: 'Pilates + Plataforma',
      subtituloModalidade: 'O Cuidado Mais Completo',
      descricao:
        'A combinação ideal: o método Pilates tradicional potencializado pelos estímulos neuromusculares e circulatórios da plataforma.',
      icone: <Sparkles className="w-6 h-6 text-[#2E5E4E]" />,
      destaque: true,
      badge: 'Mais Completo',
      frequencias: [
        {
          frequencia: '1x por semana',
          observacao: 'Somente às Sextas-Feiras',
        },
        {
          frequencia: '2x por semana',
        },
        {
          frequencia: '3x por semana',
        },
      ],
      whatsappMsg:
        'Olá! Vim pelo site do BASE 6 STUDIO e gostaria de saber mais sobre o plano integrado de Pilates + Plataforma Vibratória. 🌿',
      beneficiosInclusos: [
        'Sessões completas de Pilates em aparelhos',
        'Estímulo neuromuscular e ativação óssea com WBV',
        'Drenagem circulatória e relaxamento miofascial',
        'Plano integrado com foco nas suas necessidades',
      ],
    },
  ]

  return (
    <section
      id="planos"
      className="py-16 sm:py-20 bg-gradient-to-b from-[#F4F8F6] via-[#FFFFFF] to-[#F4F8F6] relative overflow-hidden"
    >
      {/* Detalhes orgânicos suaves de fundo */}
      <div className="absolute top-10 -right-24 w-96 h-96 rounded-full bg-[#7FAF9C]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 rounded-full bg-[#2E5E4E]/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Cabeçalho da Seção com tom acolhedor da Drica */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2EF] text-[#2E5E4E] text-xs font-heading font-semibold uppercase tracking-wider mb-3 border border-[#7FAF9C]/30 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-[#2E5E4E]" />
            Nossos Planos
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1F3D33] leading-tight tracking-tight">
            Planos que cabem no seu momento
          </h2>

          <p className="text-sm sm:text-base text-[#1F3D33]/85 mt-3 max-w-xl mx-auto font-normal leading-relaxed">
            Escolha a modalidade que melhor atende suas necessidades. Atendemos com planos{' '}
            <strong className="text-[#1F3D33] font-semibold">
              mensal, trimestral, semestral e anual
            </strong>
            , adaptados à sua rotina.
          </p>
        </div>

        {/* Grid com exatamente 3 Cards de Modalidade */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {modalidades.map((item) => {
            const ctaUrl = getWhatsAppLink(item.whatsappMsg)

            return (
              <div
                key={item.id}
                className={`relative rounded-[28px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                  item.destaque
                    ? 'bg-white border-2 border-[#2E5E4E] shadow-organic-lg ring-2 ring-[#7FAF9C]/20'
                    : 'bg-white/95 border border-[#7FAF9C]/40 hover:border-[#2E5E4E] shadow-subtle hover:shadow-organic'
                }`}
              >
                {/* Badge Destaque (Mais Completo) */}
                {item.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#2E5E4E] text-white text-[11px] font-heading font-bold shadow-md uppercase tracking-wider whitespace-nowrap">
                      <Sparkles className="w-3 h-3 text-[#7FAF9C]" />
                      {item.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Topo: Ícone e Título */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                        item.destaque
                          ? 'bg-[#EAF2EF] border-[#2E5E4E]/30'
                          : 'bg-[#F4F8F6] border-[#7FAF9C]/30'
                      }`}
                    >
                      {item.icone}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-[#1F3D33] leading-snug">
                        {item.titulo}
                      </h3>
                      <p className="text-xs font-heading font-medium text-[#2E5E4E]">
                        {item.subtituloModalidade}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#1F3D33]/80 leading-relaxed font-normal mb-5">
                    {item.descricao}
                  </p>

                  {/* Frequências Semanais em lista compacta e limpa */}
                  <div className="mb-5 p-3.5 rounded-2xl bg-[#F4F8F6]/80 border border-[#7FAF9C]/30">
                    <span className="text-[11px] font-heading uppercase tracking-wider text-[#1F3D33] font-bold block mb-2.5">
                      Frequências semanais:
                    </span>
                    <ul className="space-y-2">
                      {item.frequencias.map((freq) => (
                        <li
                          key={freq.frequencia}
                          className="flex items-center justify-between gap-2 text-xs text-[#1F3D33] font-medium"
                        >
                          <span className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#2E5E4E] shrink-0" />
                            <span>{freq.frequencia}</span>
                          </span>
                          {freq.observacao && (
                            <span className="text-[10px] font-heading font-semibold px-2 py-0.5 rounded-full bg-white text-[#2E5E4E] border border-[#7FAF9C]/40 shrink-0">
                              {freq.observacao}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefícios Inclusos */}
                  <div className="pt-4 border-t border-[#7FAF9C]/25 mb-5">
                    <span className="text-[11px] font-heading uppercase tracking-wider text-[#1F3D33] font-bold block mb-2.5">
                      O que está incluso:
                    </span>
                    <ul className="space-y-2 text-xs text-[#1F3D33]/85">
                      {item.beneficiosInclusos.map((beneficio, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5E4E] shrink-0 mt-0.5" />
                          <span>{beneficio}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Rodapé do Card: Duração discreta + Único Botão CTA */}
                <div className="pt-2">
                  <p className="text-[11px] text-[#2E5E4E] font-heading font-medium text-center mb-3">
                    Planos mensal, trimestral, semestral e anual — valores sob consulta.
                  </p>
                  <a
                    href={ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-full font-heading font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-98 shadow-xs text-center ${
                      item.destaque
                        ? 'bg-[#2E5E4E] hover:bg-[#1F3D33] text-white shadow-organic hover:shadow-organic-lg hover:scale-[1.02]'
                        : 'bg-white hover:bg-[#EAF2EF] text-[#2E5E4E] border border-[#2E5E4E] hover:border-[#1F3D33]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consultar valores no WhatsApp</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PlansSection
