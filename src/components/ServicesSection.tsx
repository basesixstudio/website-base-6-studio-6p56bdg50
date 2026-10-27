import React from 'react'
import {
  Activity,
  Stethoscope,
  Zap,
  ClipboardCheck,
  CalendarCheck2,
  Layers,
  ArrowUpRight,
} from 'lucide-react'
import { getWhatsAppLink } from '@/components/StudioLogo'

interface ServicoItem {
  id: string
  titulo: string
  descricao: string
  icone: React.ReactNode
  tag: string
}

export const ServicesSection: React.FC = () => {
  const servicos: ServicoItem[] = [
    {
      id: 'pilates',
      titulo: 'Pilates Contemporâneo',
      descricao:
        'Método moderno em aparelhos completos (Reformer, Cadillac, Cadeira e Barril) que fortalece o core, melhora a postura e devolve mobilidade funcional',
      icone: <Activity className="w-6 h-6 text-[#2E5E4E]" />,
      tag: 'Principal',
    },
    {
      id: 'fisioterapia',
      titulo: 'Pilates Clínico (Reabilitação)',
      descricao:
        'Cuidado focado no alívio de dores na coluna, hérnias, artrose e lesões musculoesqueléticas, com atendimento individualizado e supervisão rigorosa.',
      icone: <Stethoscope className="w-6 h-6 text-[#2E5E4E]" />,
      tag: 'Reabilitação',
    },
    {
      id: 'plataforma',
      titulo: 'Plataforma Vibratória (WBV)',
      descricao:
        'Recurso transversal de vibração de corpo inteiro que potencializa o ganho de força, ativa a densidade óssea, drenagem linfática e relaxamento miofascial.',
      icone: <Zap className="w-6 h-6 text-[#2E5E4E]" />,
      tag: 'Tecnologia',
    },
    {
      id: 'avaliacoes',
      titulo: 'Avaliações Físicas & Biomecânicas',
      descricao:
        'Diagnóstico postural completo e minucioso para estruturar seu plano de evolução individual com segurança e foco na melhor idade.',
      icone: <ClipboardCheck className="w-6 h-6 text-[#2E5E4E]" />,
      tag: 'Diagnóstico',
    },
    {
      id: 'experimentais',
      titulo: 'Aulas Experimentais Acolhedoras',
      descricao:
        'Vivencie o método no estúdio em Niterói sem compromisso: acolhimento humano desde o primeiro minuto com a Drica e nossa equipe.',
      icone: <CalendarCheck2 className="w-6 h-6 text-[#2E5E4E]" />,
      tag: 'Primeiro Passo',
    },
    {
      id: 'planos',
      titulo: 'Planos Flexíveis e Acessórios',
      descricao:
        'Planos mensal, trimestral, semestral e anual pensados para a sua rotina, além de meias antiderrapantes e acessórios para sua prática segura.',
      icone: <Layers className="w-6 h-6 text-[#2E5E4E]" />,
      tag: 'Liberdade',
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-white relative">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2EF] text-[#2E5E4E] text-xs font-heading font-semibold uppercase tracking-wider mb-3 border border-[#7FAF9C]/30">
            Nossas Modalidades
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1F3D33] leading-tight">
            Serviços em Destaque: Cuidado integral no Fonseca, Niterói
          </h2>
          <p className="font-heading font-medium text-base text-[#2E5E4E] mt-3">
            "Aqui unimos a ciência do movimento ao calor humano. Do treino ao acompanhamento
            clínico, encontre o espaço ideal para o seu momento."
            <span className="block text-xs font-bold font-heading text-[#7FAF9C] mt-1 uppercase tracking-wider">
              — Drica • Porta-voz BASE 6 STUDIO
            </span>
          </p>
        </div>

        {/* Grid de 6 cards (1 col mobile, 2 tablet, 3 desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((servico) => {
            const whatsLink = getWhatsAppLink(
              `Olá, Drica! Gostaria de saber mais detalhes sobre ${servico.titulo} no BASE 6 STUDIO.`,
            )

            return (
              <div
                key={servico.id}
                className="group relative bg-[#F4F8F6] hover:bg-white rounded-[24px] p-6 border border-[#7FAF9C]/30 hover:border-[#2E5E4E] shadow-xs hover:shadow-organic-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Topo do Card com Ícone e Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#EAF2EF] flex items-center justify-center shadow-xs border border-[#7FAF9C]/30 transition-colors">
                      {servico.icone}
                    </div>
                    <span className="text-[11px] font-heading font-semibold px-2.5 py-0.5 rounded-full bg-white text-[#2E5E4E] border border-[#7FAF9C]/30">
                      {servico.tag}
                    </span>
                  </div>

                  {/* Título com Montserrat */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#1F3D33] mb-2 group-hover:text-[#2E5E4E] transition-colors leading-snug">
                    {servico.titulo}
                  </h3>

                  {/* Descrição com Open Sans */}
                  <p className="text-sm text-[#1F3D33]/80 leading-relaxed font-normal">
                    {servico.descricao}
                  </p>
                </div>

                {/* Link no rodapé do card */}
                <div className="pt-6 mt-4 border-t border-[#7FAF9C]/20 flex items-center justify-between">
                  <a
                    href={whatsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-heading font-bold text-[#2E5E4E] group-hover:text-[#1F3D33] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Saber mais</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#7FAF9C]" />
                  </a>
                  <span className="text-[10px] font-heading text-[#A0A0A0] font-semibold uppercase tracking-wider">
                    Base 6
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Banner de apoio com convite acolhedor da Drica */}
        <div className="mt-14 p-6 sm:p-8 rounded-[28px] bg-gradient-to-r from-[#EAF2EF] via-[#F4F8F6] to-[#EAF2EF] border border-[#7FAF9C]/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col gap-1 max-w-xl">
            <h4 className="font-heading font-bold text-lg sm:text-xl text-[#1F3D33]">
              Ficou em dúvida sobre qual modalidade é a melhor para você?
            </h4>
            <p className="text-sm text-[#2E5E4E]">
              Converse diretamente com a Drica. Faremos uma triagem cuidadosa para indicar o treino
              ou o protocolo clínico sob medida para a sua saúde.
            </p>
          </div>
          <a
            href={getWhatsAppLink(
              'Olá, Drica! Estou em dúvida sobre qual atividade escolher no BASE 6 STUDIO.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#2E5E4E] hover:bg-[#1F3D33] text-white px-6 py-3 rounded-full text-sm font-heading font-semibold shadow-xs hover:shadow-md transition-all hover:scale-[1.02]"
          >
            Falar com a Drica
          </a>
        </div>
      </div>
    </section>
  )
}
export default ServicesSection
