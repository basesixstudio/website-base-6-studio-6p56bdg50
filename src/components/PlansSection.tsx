import React from 'react'
import {
  Activity,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Clock,
  ShieldCheck,
} from 'lucide-react'
import { getWhatsAppLink } from '@/components/StudioLogo'
import dricaInsightFoto from '@/assets/dricainsight-a719e.png'

interface FrequenciaOpcao {
  frequencia: string
  observacao?: string
  subtitulo: string
  beneficio: string
  whatsappMsg: string
}

interface GrupoPlano {
  id: string
  titulo: string
  subtituloModalidade: string
  descricao: string
  icone: React.ReactNode
  destaque?: boolean
  badge?: string
  frequencias: FrequenciaOpcao[]
  ctaPrincipalMsg: string
  beneficiosInclusos: string[]
}

export const PlansSection: React.FC = () => {
  const grupos: GrupoPlano[] = [
    {
      id: 'pilates',
      titulo: 'Pilates',
      subtituloModalidade: 'Pilates Contemporâneo em Aparelhos',
      descricao:
        'Aulas personalizadas com foco em fortalecimento do core, alinhamento postural, flexibilidade e reabilitação motora no Fonseca, Niterói.',
      icone: <Activity className="w-6 h-6 text-[#2E5E4E]" />,
      frequencias: [
        {
          frequencia: '1x por semana',
          observacao: 'Somente às Sextas-Feiras',
          subtitulo: 'Manutenção e bem-estar',
          beneficio:
            'Ideal para complementar outras atividades ou manter o corpo ativo sem sobrecarga.',
          whatsappMsg:
            'Olá, Drica! Vim pelo site do BASE 6 STUDIO e gostaria de consultar valores para o plano de Pilates (1x por semana). 🌿',
        },
        {
          frequencia: '2x por semana',
          subtitulo: 'A frequência recomendada',
          beneficio:
            'Ritmo ideal para ganho consistente de mobilidade, postura e alívio de tensões.',
          whatsappMsg:
            'Olá, Drica! Vim pelo site do BASE 6 STUDIO e gostaria de consultar valores para o plano de Pilates (2x por semana). 🌿',
        },
        {
          frequencia: '3x por semana',
          subtitulo: 'Evolução e fortalecimento profundo',
          beneficio:
            'Máxima constância para quem busca reabilitação acelerada ou condicionamento pleno.',
          whatsappMsg:
            'Olá, Drica! Vim pelo site do BASE 6 STUDIO e gostaria de consultar valores para o plano de Pilates (3x por semana). 🌿',
        },
      ],
      ctaPrincipalMsg:
        'Olá! Vim pelo site do BASE 6 STUDIO e gostaria de saber mais sobre os planos de Pilates. 🌿',
      beneficiosInclusos: [
        'Aparelhos completos (Reformer, Cadillac, Cadeira, Barril)',
        'Atendimento individualizado e turmas reduzidas',
        'Acompanhamento contínuo da sua evolução',
      ],
    },
    {
      id: 'pilates-plataforma',
      titulo: 'Pilates + Plataforma',
      subtituloModalidade: 'O Cuidado Mais Completo',
      descricao:
        'A combinação perfeita: o método Pilates tradicional potencializado pelos estímulos neuromusculares da Plataforma Vibratória (WBV).',
      icone: <Sparkles className="w-6 h-6 text-[#2E5E4E]" />,
      destaque: true,
      badge: 'Mais Completo',
      frequencias: [
        {
          frequencia: '1x por semana',
          observacao: 'Somente às Sextas-Feiras',
          subtitulo: 'Sinergia inicial',
          beneficio:
            'Sessão completa unindo Pilates e vibração de corpo inteiro no mesmo cronograma.',
          whatsappMsg:
            'Olá, Drica! Vim pelo site do BASE 6 STUDIO e gostaria de consultar valores para o plano integrado de Pilates + Plataforma (1x por semana). 🌿',
        },
        {
          frequencia: '2x por semana',
          subtitulo: 'Transformação visível e sentida',
          beneficio:
            'Equilíbrio ideal entre força profunda, densidade óssea e drenagem circulatória.',
          whatsappMsg:
            'Olá, Drica! Vim pelo site do BASE 6 STUDIO e gostaria de consultar valores para o plano integrado de Pilates + Plataforma (2x por semana). 🌿',
        },
        {
          frequencia: '3x por semana',
          subtitulo: 'Imersão em saúde e longevidade',
          beneficio:
            'A experiência definitiva de reabilitação, tônus muscular e bem-estar integral.',
          whatsappMsg:
            'Olá, Drica! Vim pelo site do BASE 6 STUDIO e gostaria de consultar valores para o plano integrado de Pilates + Plataforma (3x por semana). 🌿',
        },
      ],
      ctaPrincipalMsg:
        'Olá! Vim pelo site do BASE 6 STUDIO e gostaria de saber mais sobre o plano integrado de Pilates + Plataforma Vibratória. 🌿',
      beneficiosInclusos: [
        'Sessões completas de Pilates em aparelhos',
        'Estímulo neuromuscular e ativação óssea com WBV',
        'Drenagem circulatória e relaxamento miofascial',
        'Plano personalizado com foco nas suas metas',
      ],
    },
    {
      id: 'plataforma',
      titulo: 'Plataforma',
      subtituloModalidade: 'Plataforma Vibratória (WBV)',
      descricao:
        'Tecnologia de vibração de corpo inteiro (Whole Body Vibration) que estimula reflexos neuromusculares, ganho de equilíbrio e circulação.',
      icone: <Zap className="w-6 h-6 text-[#2E5E4E]" />,
      frequencias: [
        {
          frequencia: '1x por semana',
          observacao: 'Somente às Sextas-Feiras',
          subtitulo: 'Estímulo e circulação',
          beneficio:
            'Ativação linfática e relaxamento miofascial para aliviar pernas cansadas e dores.',
          whatsappMsg:
            'Olá, Drica! Vim pelo site do BASE 6 STUDIO e gostaria de consultar valores para o plano de Plataforma Vibratória (1x por semana). 🌿',
        },
        {
          frequencia: '2x por semana',
          subtitulo: 'Fortalecimento e tônus',
          beneficio:
            'Estímulo regular à densidade óssea e reflexos de equilíbrio, ideal para todas as idades.',
          whatsappMsg:
            'Olá, Drica! Vim pelo site do BASE 6 STUDIO e gostaria de consultar valores para o plano de Plataforma Vibratória (2x por semana). 🌿',
        },
        {
          frequencia: '3x por semana',
          subtitulo: 'Ativação máxima',
          beneficio:
            'Rotina potente de circulação, tônus muscular e vitalidade articular supervisionada.',
          whatsappMsg:
            'Olá, Drica! Vim pelo site do BASE 6 STUDIO e gostaria de consultar valores para o plano de Plataforma Vibratória (3x por semana). 🌿',
        },
      ],
      ctaPrincipalMsg:
        'Olá! Vim pelo site do BASE 6 STUDIO e gostaria de saber mais sobre os planos de Plataforma Vibratória. 🌿',
      beneficiosInclusos: [
        'Equipamento profissional de alta precisão biomecânica',
        'Acompanhamento e ajuste de frequência individual',
        'Sessões rápidas, eficientes e de baixo impacto',
      ],
    },
  ]

  const periodos = [
    { nome: 'Mensal', descricao: 'Flexibilidade total mês a mês' },
    { nome: 'Trimestral', descricao: 'Período ideal para criar o hábito' },
    { nome: 'Semestral', descricao: 'Constância e evolução consolidada' },
    { nome: 'Anual', descricao: 'Compromisso duradouro com sua saúde' },
  ]

  return (
    <section
      id="planos"
      className="py-20 bg-gradient-to-b from-[#F4F8F6] via-[#FFFFFF] to-[#F4F8F6] relative overflow-hidden"
    >
      {/* Detalhes orgânicos suaves de fundo */}
      <div className="absolute top-10 -right-24 w-96 h-96 rounded-full bg-[#7FAF9C]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 rounded-full bg-[#2E5E4E]/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Cabeçalho da Seção com tom acolhedor da Drica */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2EF] text-[#2E5E4E] text-xs font-heading font-semibold uppercase tracking-wider mb-3 border border-[#7FAF9C]/30 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-[#2E5E4E]" />
            Nossos Planos
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1F3D33] leading-tight tracking-tight">
            Planos que cabem no seu momento
          </h2>

          <p className="font-heading font-medium text-base sm:text-lg text-[#2E5E4E] mt-3 max-w-2xl mx-auto">
            "Aqui no BASE 6 STUDIO, seu plano se adapta ao seu ritmo e aos seus objetivos. Todos os
            nossos planos estão disponíveis nas modalidades{' '}
            <strong className="text-[#1F3D33]">mensal, trimestral, semestral e anual</strong>."
            <span className="block text-xs font-bold font-heading text-[#7FAF9C] mt-1 uppercase tracking-wider">
              — Drica • Porta-voz & Profissional de Educação Física
            </span>
          </p>

          <p className="text-sm text-[#1F3D33]/80 mt-3 max-w-2xl mx-auto font-normal">
            Escolha a frequência semanal que melhor combina com a sua rotina: <strong>1x</strong>,{' '}
            <strong>2x</strong> ou <strong>3x por semana</strong> em sessões de Pilates, Plataforma
            Vibratória (WBV) ou no pacote integrado em nosso estúdio no Fonseca, Niterói.
          </p>
        </div>

        {/* Barra de Períodos de Contratação */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-white/95 border border-[#7FAF9C]/40 shadow-subtle max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-left">
              <div className="w-9 h-9 rounded-full bg-[#EAF2EF] flex items-center justify-center text-[#2E5E4E] shrink-0">
                <Clock className="w-4 h-4 text-[#2E5E4E]" />
              </div>
              <div>
                <p className="text-xs font-heading font-bold text-[#1F3D33] uppercase tracking-wider">
                  Durações Disponíveis
                </p>
                <p className="text-xs text-[#2E5E4E]">
                  Todos os planos contam com opções de adesão:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full sm:w-auto">
              {periodos.map((p) => (
                <div
                  key={p.nome}
                  className="px-3 py-2 rounded-xl bg-[#F4F8F6] border border-[#7FAF9C]/30 text-center"
                  title={p.descricao}
                >
                  <span className="block text-xs font-heading font-bold text-[#1F3D33]">
                    {p.nome}
                  </span>
                  <span className="block text-[10px] text-[#2E5E4E] font-medium leading-tight">
                    {p.descricao}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grid dos 3 Grupos de Planos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {grupos.map((grupo) => {
            const ctaUrl = getWhatsAppLink(grupo.ctaPrincipalMsg)

            return (
              <div
                key={grupo.id}
                className={`relative rounded-[32px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                  grupo.destaque
                    ? 'bg-white border-2 border-[#2E5E4E] shadow-organic-lg ring-2 ring-[#7FAF9C]/25'
                    : 'bg-white/95 border border-[#7FAF9C]/40 hover:border-[#2E5E4E] shadow-subtle hover:shadow-organic'
                }`}
              >
                {/* Badge Destaque (ex: Mais Completo) */}
                {grupo.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#2E5E4E] text-white text-xs font-heading font-bold shadow-md uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-[#7FAF9C]" />
                      {grupo.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Topo do Card: Ícone e Título do Grupo */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs border ${
                        grupo.destaque
                          ? 'bg-[#EAF2EF] border-[#2E5E4E]'
                          : 'bg-[#F4F8F6] border-[#7FAF9C]/30'
                      }`}
                    >
                      {grupo.icone}
                    </div>
                    <span className="text-[11px] font-heading font-semibold px-2.5 py-1 rounded-full bg-[#EAF2EF] text-[#2E5E4E] border border-[#7FAF9C]/30">
                      1x, 2x e 3x / sem.
                    </span>
                  </div>

                  {/* Nome do Plano (H3 para hierarquia semântica de SEO) */}
                  <h3 className="font-heading font-bold text-2xl text-[#1F3D33] leading-snug">
                    {grupo.titulo}
                  </h3>
                  <p className="text-xs font-heading font-semibold text-[#2E5E4E] mt-0.5 mb-2">
                    {grupo.subtituloModalidade}
                  </p>
                  <p className="text-sm text-[#1F3D33]/80 leading-relaxed font-normal mb-6">
                    {grupo.descricao}
                  </p>

                  {/* Bloco 'Valores sob consulta' no lugar do preço */}
                  <div className="p-3.5 rounded-2xl bg-[#F4F8F6] border border-[#7FAF9C]/30 mb-6 text-center">
                    <span className="text-[11px] font-heading uppercase tracking-wider text-[#7FAF9C] font-bold block">
                      Investimento
                    </span>
                    <span className="font-heading font-bold text-lg sm:text-xl text-[#2E5E4E] block mt-0.5">
                      Valores sob consulta
                    </span>
                    <span className="text-[11px] text-[#1F3D33]/70 font-normal block mt-0.5">
                      Planos mensal, trimestral, semestral e anual
                    </span>
                  </div>

                  {/* Frequências Semanais (1x, 2x, 3x) */}
                  <div className="space-y-3 mb-6">
                    <span className="text-[11px] font-heading uppercase tracking-wider text-[#1F3D33] font-bold block">
                      Opções de Frequência Semanal:
                    </span>
                    {grupo.frequencias.map((freq) => {
                      const whatsFreqUrl = getWhatsAppLink(freq.whatsappMsg)

                      return (
                        <a
                          key={freq.frequencia}
                          href={whatsFreqUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/item block p-3.5 rounded-2xl bg-white border border-[#7FAF9C]/30 hover:border-[#2E5E4E] hover:bg-[#EAF2EF]/40 transition-all text-left shadow-2xs"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                              <span className="font-heading font-bold text-sm text-[#1F3D33] group-hover/item:text-[#2E5E4E] transition-colors">
                                {freq.frequencia}
                              </span>
                              {freq.observacao && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-heading font-semibold bg-[#EAF2EF] text-[#2E5E4E] border border-[#7FAF9C]/40">
                                  {freq.observacao}
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] font-heading font-semibold text-[#2E5E4E] inline-flex items-center gap-1 group-hover/item:translate-x-0.5 transition-transform shrink-0">
                              <span>Consultar</span>
                              <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                          <span className="block text-[11px] font-medium text-[#2E5E4E] mt-0.5">
                            {freq.subtitulo}
                          </span>
                          <span className="block text-xs text-[#1F3D33]/75 font-normal mt-1 leading-snug">
                            {freq.beneficio}
                          </span>
                        </a>
                      )
                    })}
                  </div>

                  {/* O que está incluso */}
                  <div className="pt-4 border-t border-[#7FAF9C]/20 mb-6">
                    <span className="text-[11px] font-heading uppercase tracking-wider text-[#1F3D33] font-bold block mb-2.5">
                      O que está incluso:
                    </span>
                    <ul className="space-y-2 text-xs text-[#1F3D33]/85">
                      {grupo.beneficiosInclusos.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5E4E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Botão de Ação do Card */}
                <div className="pt-2">
                  <a
                    href={ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-5 rounded-full font-heading font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-98 shadow-xs text-center ${
                      grupo.destaque
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

        {/* Banner CTA de Destaque ao final da seção */}
        <div className="mt-14 p-6 sm:p-8 rounded-[32px] bg-gradient-to-r from-[#EAF2EF] via-[#F4F8F6] to-[#EAF2EF] border border-[#7FAF9C]/50 shadow-organic flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4 max-w-2xl">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#2E5E4E] bg-[#2E5E4E]/10 shrink-0 shadow-xs hidden sm:block">
              <img
                src={dricaInsightFoto}
                alt="Prof.ª Adriana Mello de Lima (Drica), porta-voz do BASE 6 STUDIO em Niterói"
                className="w-full h-full object-cover object-[50%_15%]"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#2E5E4E] uppercase tracking-wider justify-center md:justify-start">
                <ShieldCheck className="w-4 h-4 text-[#2E5E4E]" />
                Atendimento humanizado com a Drica
              </div>
              <h4 className="font-heading font-bold text-xl sm:text-2xl text-[#1F3D33] leading-snug">
                Quer saber qual plano é ideal para o seu momento?
              </h4>
              <p className="text-sm text-[#1F3D33]/85 leading-relaxed font-normal">
                Converse diretamente conosco pelo WhatsApp. Informamos os valores para cada período
                (mensal, trimestral, semestral e anual) e tiramos todas as suas dúvidas com todo
                carinho.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink(
              'Olá! Vim pelo site do BASE 6 STUDIO e gostaria de saber mais sobre os planos. 🌿',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2.5 bg-[#2E5E4E] hover:bg-[#1F3D33] text-white px-8 py-4 rounded-full font-heading font-semibold text-base shadow-organic hover:shadow-organic-lg transition-all duration-200 hover:scale-[1.02] active:scale-98 text-center"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Consultar planos com a Drica</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default PlansSection
