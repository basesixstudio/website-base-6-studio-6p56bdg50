import React, { useState } from 'react'
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  MapPin,
  CalendarCheck,
  HeartHandshake,
  Activity,
  Zap,
  ArrowRight,
} from 'lucide-react'
import { ADDRESS_DISPLAY, WHATSAPP_DISPLAY, getWhatsAppLink } from '@/components/StudioLogo'
import dricaInsightFoto from '@/assets/dricainsight-a719e.png'

interface FaqItem {
  id: string
  pergunta: string
  resposta: React.ReactNode
  icone: React.ReactNode
}

export const FaqSection: React.FC = () => {
  const [abertoId, setAbertoId] = useState<string | null>('faq-1')

  const toggleItem = (id: string) => {
    setAbertoId((prev) => (prev === id ? null : id))
  }

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      pergunta: 'O que é o Pilates contemporâneo?',
      icone: <Activity className="w-5 h-5 text-[#2E5E4E]" />,
      resposta: (
        <p>
          O <strong>Pilates contemporâneo</strong> une os seis princípios clássicos criados por
          Joseph Pilates (Powerhouse/Centro de Força, Respiração, Concentração, Controle, Precisão e
          Fluidez) aos mais recentes avanços da biomecânica humana e da fisioterapia motora. Nossos
          exercícios são adaptados para respeitar a anatomia, o ritmo e os limites de cada corpo,
          garantindo fortalecimento postural profundo, flexibilidade e segurança em aparelhos
          modernos.
        </p>
      ),
    },
    {
      id: 'faq-2',
      pergunta: 'Nunca fiz Pilates — por onde começo?',
      icone: <CalendarCheck className="w-5 h-5 text-[#2E5E4E]" />,
      resposta: (
        <p>
          Você começa dando o primeiro passo com acolhimento! Não é necessário ter experiência
          prévia, flexibilidade ou força. No <strong>BASE 6 STUDIO</strong>, começamos com uma
          conversa tranquila com a Drica para compreender suas queixas, objetivos e rotina. A partir
          daí, conduzimos uma aula experimental acolhedora e respeitosa, onde você aprende cada
          comando no seu tempo.
        </p>
      ),
    },
    {
      id: 'faq-3',
      pergunta: 'O Pilates clínico serve para quem está com dor?',
      icone: <HeartHandshake className="w-5 h-5 text-[#2E5E4E]" />,
      resposta: (
        <p>
          Com certeza! O <strong>Pilates clínico</strong> é indicado justamente para quem convive
          com dores na coluna (lombalgia, cervicalgia, hérnia de disco), alterações posturais,
          artrose, bursite ou necessita de reabilitação física pós-cirúrgica. Aqui em Fonseca,
          Niterói, Educação Física e Fisioterapia trabalham em harmonia para estabilizar suas
          articulações e devolver sua autonomia de movimento sem dor.
        </p>
      ),
    },
    {
      id: 'faq-4',
      pergunta: 'O que é a Plataforma Vibratória (WBV)?',
      icone: <Zap className="w-5 h-5 text-[#2E5E4E]" />,
      resposta: (
        <p>
          A tecnologia <strong>WBV (Whole Body Vibration)</strong> proporciona vibrações mecânicas
          controladas por todo o corpo. No BASE 6 STUDIO, ela atua como um recurso transversal que
          ativa reflexos neuromusculares involuntários, acelera o ganho de tônus e equilíbrio,
          estimula a densidade óssea (essencial na melhor idade), promove drenagem circulatória e
          alivia tensões musculares profundas.
        </p>
      ),
    },
    {
      id: 'faq-5',
      pergunta: 'Como funciona a aula experimental?',
      icone: <Sparkles className="w-5 h-5 text-[#2E5E4E]" />,
      resposta: (
        <p>
          A aula experimental é uma vivência prática e acolhedora em nosso estúdio. Você é recebido
          com atenção individual pela nossa equipe, conhece os aparelhos do método (Reformer,
          Cadillac, Cadeira, Barril) e realiza exercícios leves e precisos. É a oportunidade ideal
          para você sentir como seu corpo responde ao método antes de escolher seu plano. O
          agendamento é feito direto pelo WhatsApp:{' '}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E5E4E] font-semibold underline hover:text-[#1F3D33]"
          >
            {WHATSAPP_DISPLAY}
          </a>
          .
        </p>
      ),
    },
    {
      id: 'faq-6',
      pergunta: 'Onde fica o estúdio BASE 6 STUDIO em Niterói?',
      icone: <MapPin className="w-5 h-5 text-[#2E5E4E]" />,
      resposta: (
        <p>
          Nosso estúdio está situado em excelente ponto do bairro Fonseca, em Niterói/RJ: no
          endereço <strong className="text-[#1F3D33]">{ADDRESS_DISPLAY}</strong>. Contamos com um
          ambiente amplo, climatizado, acessível e especialmente estruturado para o seu conforto,
          segurança e saúde física.
        </p>
      ),
    },
  ]

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-b from-[#FFFFFF] via-[#F4F8F6] to-[#FFFFFF] relative overflow-hidden"
    >
      {/* Detalhes orgânicos de fundo */}
      <div className="absolute top-1/3 -left-28 w-80 h-80 rounded-full bg-[#7FAF9C]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-28 w-88 h-88 rounded-full bg-[#2E5E4E]/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        {/* Cabeçalho acolhedor no tom da Drica */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2EF] text-[#2E5E4E] text-xs font-heading font-semibold uppercase tracking-wider mb-3 border border-[#7FAF9C]/30 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#2E5E4E]" />
            Dúvidas Frequentes • FAQ
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1F3D33] leading-tight">
            Perguntas frequentes sobre o BASE 6 STUDIO
          </h2>
          <p className="font-heading font-medium text-base text-[#2E5E4E] mt-3">
            Tire suas dúvidas de forma rápida e clara. Se quiser conversar sobre seu caso
            específico, a Drica está pronta para te ouvir com carinho.
          </p>
        </div>

        {/* Lista de perguntas frequentes (Accordion acessível) */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isAberto = abertoId === faq.id
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isAberto
                    ? 'bg-white border-[#2E5E4E] shadow-organic'
                    : 'bg-white/90 border-[#7FAF9C]/30 hover:border-[#7FAF9C] shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isAberto}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E5E4E]"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isAberto ? 'bg-[#EAF2EF]' : 'bg-[#F4F8F6]'
                      }`}
                    >
                      {faq.icone}
                    </div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#1F3D33] leading-snug">
                      {faq.pergunta}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isAberto
                        ? 'bg-[#2E5E4E] text-white rotate-180'
                        : 'bg-[#EAF2EF] text-[#2E5E4E]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isAberto && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-[#1F3D33]/85 leading-relaxed font-normal border-t border-[#EAF2EF] bg-white">
                    <div className="pt-3">{faq.resposta}</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Card Dica da Drica e CTA para aula experimental */}
        <div className="mt-10 p-6 sm:p-7 rounded-[28px] bg-[#EAF2EF] border border-[#7FAF9C]/50 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="flex items-center gap-3.5 text-left w-full sm:w-auto">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#2E5E4E] bg-[#2E5E4E]/10 shrink-0 shadow-xs">
              <img
                src={dricaInsightFoto}
                alt="Drica, porta-voz do BASE 6 STUDIO em Niterói"
                className="w-full h-full object-cover object-[50%_15%]"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs font-bold font-heading text-[#2E5E4E] uppercase tracking-wider">
                Ainda tem alguma dúvida?
              </p>
              <p className="text-sm text-[#1F3D33] mt-0.5">
                "Mande uma mensagem para mim no WhatsApp. Eu mesma te respondo e te ajudo a dar esse
                passo!"
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink(
              'Olá, Drica! Estava lendo o FAQ do site e gostaria de tirar uma dúvida sobre as aulas.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#2E5E4E] hover:bg-[#1F3D33] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-heading font-semibold shadow-xs hover:shadow-md transition-all hover:scale-[1.02] active:scale-95"
          >
            <span>Tirar dúvidas no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
