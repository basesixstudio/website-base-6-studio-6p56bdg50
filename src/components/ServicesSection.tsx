import React from 'react'
import {
  Activity,
  Dumbbell,
  Stethoscope,
  Zap,
  ClipboardCheck,
  CalendarCheck2,
  Layers,
  ShoppingBag,
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
        'Método moderno que fortalece o corpo e melhora a postura com movimentos fluidos e conscientes.',
      icone: <Activity className="w-6 h-6 text-[#2E7D32]" />,
      tag: 'Principal',
    },
    {
      id: 'condicionamento',
      titulo: 'Condicionamento Físico',
      descricao: 'Treinos que aumentam resistência, força e disposição para o dia a dia.',
      icone: <Dumbbell className="w-6 h-6 text-[#2E7D32]" />,
      tag: 'Energia',
    },
    {
      id: 'fisioterapia',
      titulo: 'Fisioterapia (Pilates Clínico)',
      descricao: 'Reabilitação orientada por fisioterapeuta para tratar dores e prevenir lesões.',
      icone: <Stethoscope className="w-6 h-6 text-[#2E7D32]" />,
      tag: 'Reabilitação',
    },
    {
      id: 'plataforma',
      titulo: 'Plataforma Vibratória (WBV)',
      descricao:
        'Treino de corpo inteiro em vibração que potencializa resultados e alivia tensões.',
      icone: <Zap className="w-6 h-6 text-[#2E7D32]" />,
      tag: 'Tecnologia',
    },
    {
      id: 'avaliacoes',
      titulo: 'Avaliações Físicas',
      descricao: 'Diagnóstico completo para montar um plano sob medida para você.',
      icone: <ClipboardCheck className="w-6 h-6 text-[#2E7D32]" />,
      tag: 'Diagnóstico',
    },
    {
      id: 'experimentais',
      titulo: 'Aulas Experimentais',
      descricao: 'Experimente antes de decidir. Sem compromisso, com toda a acolhida.',
      icone: <CalendarCheck2 className="w-6 h-6 text-[#2E7D32]" />,
      tag: 'Comece Já',
    },
    {
      id: 'planos',
      titulo: 'Planos Flexíveis',
      descricao: 'Mensal, trimestral, semestral ou anual. Escolha o que cabe no seu momento.',
      icone: <Layers className="w-6 h-6 text-[#2E7D32]" />,
      tag: 'Liberdade',
    },
    {
      id: 'acessorios',
      titulo: 'Acessórios & Meias Antiderrapantes',
      descricao: 'Venda de meias e acessórios para melhorar sua prática com conforto e segurança.',
      icone: <ShoppingBag className="w-6 h-6 text-[#2E7D32]" />,
      tag: 'Conforto',
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-white relative">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold uppercase tracking-wider mb-3">
            O que oferecemos
          </div>
          <h2 className="font-serif italic font-bold text-3xl sm:text-4xl text-[#1B3A1B] leading-tight">
            Cuidado integral, do primeiro alívio à sua melhor versão.
          </h2>
          <p className="font-serif italic text-base text-[#4A7C59] mt-3">
            "Aqui unimos a ciência da reabilitação à leveza do movimento. Encontre a modalidade
            ideal para o seu corpo."
            <span className="block not-italic text-xs font-bold text-[#2E7D32] mt-1">— Drica</span>
          </p>
        </div>

        {/* Grid de 8 cards (1 col mobile, 2 tablet, 4 desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map((servico) => {
            const whatsLink = getWhatsAppLink(
              `Olá, Drica! Gostaria de saber mais detalhes sobre ${servico.titulo} no BASE 6 STUDIO.`,
            )

            return (
              <div
                key={servico.id}
                className="group relative bg-[#F4F9F4] hover:bg-white rounded-[24px] p-6 border border-[#C8E6C9]/60 hover:border-[#81C784] shadow-xs hover:shadow-organic-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Topo do Card com Ícone e Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#E8F5E9] flex items-center justify-center shadow-xs border border-[#C8E6C9]/40 transition-colors">
                      {servico.icone}
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white text-[#4A7C59] border border-[#C8E6C9]/40">
                      {servico.tag}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="font-serif italic font-bold text-xl text-[#1B3A1B] mb-2 group-hover:text-[#2E7D32] transition-colors">
                    {servico.titulo}
                  </h3>

                  {/* Descrição */}
                  <p className="text-sm text-[#1B3A1B]/75 leading-relaxed font-normal">
                    {servico.descricao}
                  </p>
                </div>

                {/* Link no rodapé do card */}
                <div className="pt-6 mt-4 border-t border-[#C8E6C9]/40 flex items-center justify-between">
                  <a
                    href={whatsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#2E7D32] group-hover:text-[#1B3A1B] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Saber mais</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <span className="text-[10px] text-[#4A7C59]/60 font-semibold uppercase">
                    Base 6
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Rodapé da seção de serviços com convite acolhedor */}
        <div className="mt-14 p-6 sm:p-8 rounded-[28px] bg-gradient-to-r from-[#E8F5E9] via-[#F4F9F4] to-[#E8F5E9] border border-[#C8E6C9] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col gap-1">
            <h4 className="font-serif italic font-bold text-lg text-[#1B3A1B]">
              Ficou em dúvida sobre qual atividade é melhor para você?
            </h4>
            <p className="text-sm text-[#4A7C59]">
              Converse diretamente com a Drica. Faremos uma triagem carinhosa para indicar o treino
              perfeito.
            </p>
          </div>
          <a
            href={getWhatsAppLink(
              'Olá, Drica! Estou em dúvida sobre qual atividade escolher no BASE 6 STUDIO.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#2E7D32] hover:bg-[#256629] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xs hover:shadow-md transition-all hover:scale-[1.02]"
          >
            Falar com a Drica
          </a>
        </div>
      </div>
    </section>
  )
}
