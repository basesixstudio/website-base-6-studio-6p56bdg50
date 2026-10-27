import React, { useState } from 'react'
import {
  Send,
  CheckCircle2,
  MessageCircle,
  Mail,
  User,
  HelpCircle,
  Loader2,
  Sparkles,
} from 'lucide-react'
import { criarContato, type NecessidadeTipo } from '@/services/contatos'
import { useToast } from '@/hooks/use-toast'
import {
  getWhatsAppLink,
  WHATSAPP_DISPLAY,
  EMAIL_DISPLAY,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from '@/components/StudioLogo'
import dricaInsightFoto from '@/assets/dricainsight-a719e.png'
import dricaWelcomeFoto from '@/assets/dricasejambem-vindos-acb6c.png'

const OPCOES_NECESSIDADE: NecessidadeTipo[] = [
  'Pilates Contemporâneo',
  'Pilates Clínico',
  'Plataforma Vibratória',
  'Avaliação Física',
  'Aula Experimental',
  'Outro',
]

export const ContactFormSection: React.FC = () => {
  const { toast } = useToast()

  const [nome, setNome] = useState('')
  const [contato, setContato] = useState('')
  const [necessidade, setNecessidade] = useState<NecessidadeTipo>('Aula Experimental')

  const [erros, setErros] = useState<{ nome?: string; contato?: string; necessidade?: string }>({})
  const [carregando, setCarregando] = useState(false)
  const [sucesso, setSucesso] = useState(false)

  const validar = () => {
    const novosErros: typeof erros = {}
    const nomeTrim = nome.trim()
    const contatoTrim = contato.trim()

    if (!nomeTrim) {
      novosErros.nome = 'Por favor, informe seu nome.'
    } else if (nomeTrim.length < 2) {
      novosErros.nome = 'O nome precisa ter pelo menos 2 caracteres.'
    } else if (nomeTrim.length > 120) {
      novosErros.nome = 'O nome deve ter no máximo 120 caracteres.'
    }

    if (!contatoTrim) {
      novosErros.contato = 'Por favor, informe seu WhatsApp ou e-mail para resposta.'
    } else if (contatoTrim.length < 5) {
      novosErros.contato = 'Informe um contato válido (ex: (21) 99999-9999 ou seu@email.com).'
    } else if (contatoTrim.length > 120) {
      novosErros.contato = 'O contato deve ter no máximo 120 caracteres.'
    }

    if (!necessidade) {
      novosErros.necessidade = 'Selecione o que você procura.'
    }

    setErros(novosErros)
    return Object.keys(novosErros).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validar()) return

    setCarregando(true)
    try {
      await criarContato({
        nome: nome.trim(),
        contato: contato.trim(),
        necessidade,
      })

      setSucesso(true)
      setNome('')
      setContato('')
      setNecessidade('Aula Experimental')
      setErros({})

      toast({
        title: 'Recebi sua mensagem!',
        description: 'Em breve você terá a resposta da Drica. Obrigado pelo carinho!',
        className: 'bg-[#2E5E4E] text-white border-none shadow-lg',
      })
    } catch (error) {
      console.error('Erro ao enviar contato:', error)
      toast({
        title: 'Não foi possível enviar',
        description: 'Tente novamente ou mande mensagem direto no WhatsApp.',
        variant: 'destructive',
      })
    } finally {
      setCarregando(false)
    }
  }

  return (
    <section id="contato" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAF2EF] text-[#2E5E4E] text-xs font-heading font-semibold uppercase tracking-wider mb-3 border border-[#7FAF9C]/30">
            <Sparkles className="w-3 h-3 text-[#2E5E4E]" />
            Primeiro Passo
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1F3D33] leading-tight">
            Agende sua visita: Diga um oi para a Drica.
          </h2>
          <p className="text-base text-[#1F3D33]/80 mt-3 leading-relaxed">
            Preencha o formulário e nós retornamos com carinho. Conheça nosso estúdio no Fonseca,
            Niterói/RJ, ouvindo sua história e apresentando a melhor alternativa para seu momento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Lado Esquerdo (Desktop) / Acima (Mobile): Card de boas-vindas com a Drica na porta da Base */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {/* Card de Boas-Vindas */}
            <div className="bg-[#F4F8F6] rounded-[32px] border border-[#7FAF9C]/40 shadow-organic overflow-hidden flex flex-col h-full">
              {/* Imagem da Drica dando boas-vindas na porta */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] max-h-[460px] overflow-hidden bg-[#1F3D33]">
                <img
                  src={dricaWelcomeFoto}
                  alt="Drica, Porta-voz & Profissional de Educação Física do BASE 6 STUDIO, dando boas-vindas na porta do estúdio"
                  className="w-full h-full object-cover object-[50%_20%] select-none hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1F3D33]/90 via-[#1F3D33]/40 to-transparent pointer-events-none" />

                {/* Tag flutuante sobre a imagem */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#2E5E4E] text-[11px] font-heading font-bold uppercase tracking-wider shadow-xs border border-[#7FAF9C]/30">
                    <Sparkles className="w-3 h-3 text-[#2E5E4E]" />
                    Porta Aberta
                  </span>
                </div>

                {/* Frase de efeito em destaque sobre o rodapé da foto */}
                <div className="absolute bottom-4 left-5 right-5 text-white z-10 pointer-events-none">
                  <p className="font-heading font-bold text-xl sm:text-2xl leading-tight text-white drop-shadow-md">
                    "Sejam bem-vindos à nossa Base!"
                  </p>
                  <p className="text-xs text-[#7FAF9C] font-heading font-semibold mt-1 drop-shadow-xs">
                    Drica • BASE 6 STUDIO
                  </p>
                </div>
              </div>

              {/* Mensagem acolhedora complementar da Drica */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 gap-4">
                <p className="text-sm sm:text-base text-[#1F3D33] leading-relaxed font-body">
                  Aqui, movimento, saúde e cuidado caminham juntos — e a gente recebe cada pessoa
                  pelo nome. Nossa porta está sempre aberta para você começar no seu ritmo, com
                  segurança e leveza.
                </p>

                {/* Balão Dica rápida */}
                <div className="p-4 rounded-2xl bg-white border border-[#7FAF9C]/35 flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-[#2E5E4E] shrink-0 mt-0.5 bg-[#2E5E4E]/10">
                    <img
                      src={dricaInsightFoto}
                      alt="Drica"
                      className="w-full h-full object-cover object-[50%_15%]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-heading font-bold text-[#2E5E4E] uppercase tracking-wider">
                      Dica da Drica
                    </span>
                    <p className="text-xs text-[#1F3D33]/90 leading-snug">
                      "Você não precisa chegar sabendo o método. Venha tomar um café conosco e vamos
                      conversar sobre o seu bem-estar."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário com visual acolhedor */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-[#F4F8F6] p-8 sm:p-10 rounded-[32px] border border-[#7FAF9C]/40 shadow-organic h-full flex flex-col justify-center">
              {sucesso ? (
                <div className="py-8 text-center flex flex-col items-center gap-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#EAF2EF] border-2 border-[#2E5E4E] flex items-center justify-center text-[#2E5E4E] shadow-xs">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#1F3D33]">
                    Recebi sua mensagem!
                  </h3>
                  <p className="text-sm text-[#1F3D33]/80 max-w-md leading-relaxed">
                    Muito obrigado pelo contato. Em breve a Drica e nossa equipe entrarão em contato
                    para agendar sua conversa ou aula experimental com todo carinho.
                  </p>
                  <button
                    onClick={() => setSucesso(false)}
                    className="mt-4 text-xs font-heading font-bold text-[#2E5E4E] hover:underline uppercase tracking-wider cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Campo Nome */}
                  <div>
                    <label
                      htmlFor="campo-nome"
                      className="block text-xs font-heading font-bold text-[#1F3D33] uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
                    >
                      <User className="w-3.5 h-3.5 text-[#2E5E4E]" />
                      Seu Nome *
                    </label>
                    <input
                      id="campo-nome"
                      type="text"
                      maxLength={120}
                      autoComplete="name"
                      placeholder="Como podemos te chamar?"
                      value={nome}
                      onChange={(e) => {
                        setNome(e.target.value.slice(0, 120))
                        if (erros.nome) setErros({ ...erros, nome: undefined })
                      }}
                      className={`w-full px-4 py-3 rounded-2xl bg-white border ${
                        erros.nome
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-[#7FAF9C]/40 focus:border-[#2E5E4E]'
                      } text-[#1F3D33] placeholder:text-[#A0A0A0] text-sm focus:outline-none focus:ring-2 focus:ring-[#7FAF9C]/40 transition-all`}
                    />
                    {erros.nome && <p className="text-xs text-red-600 mt-1">{erros.nome}</p>}
                  </div>

                  {/* Campo Contato */}
                  <div>
                    <label
                      htmlFor="campo-contato"
                      className="block text-xs font-heading font-bold text-[#1F3D33] uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#2E5E4E]" />
                      Contato (WhatsApp ou E-mail) *
                    </label>
                    <input
                      id="campo-contato"
                      type="text"
                      maxLength={120}
                      autoComplete="tel"
                      placeholder="Ex: (21) 99444-8482 ou seu@email.com"
                      value={contato}
                      onChange={(e) => {
                        setContato(e.target.value.slice(0, 120))
                        if (erros.contato) setErros({ ...erros, contato: undefined })
                      }}
                      className={`w-full px-4 py-3 rounded-2xl bg-white border ${
                        erros.contato
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-[#7FAF9C]/40 focus:border-[#2E5E4E]'
                      } text-[#1F3D33] placeholder:text-[#A0A0A0] text-sm focus:outline-none focus:ring-2 focus:ring-[#7FAF9C]/40 transition-all`}
                    />
                    {erros.contato && <p className="text-xs text-red-600 mt-1">{erros.contato}</p>}
                  </div>

                  {/* Campo O que você precisa (Select) */}
                  <div>
                    <label
                      htmlFor="campo-necessidade"
                      className="block text-xs font-heading font-bold text-[#1F3D33] uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-[#2E5E4E]" />
                      O que você procura? *
                    </label>
                    <select
                      id="campo-necessidade"
                      value={necessidade}
                      onChange={(e) => {
                        setNecessidade(e.target.value as NecessidadeTipo)
                        if (erros.necessidade) setErros({ ...erros, necessidade: undefined })
                      }}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#7FAF9C]/40 focus:border-[#2E5E4E] text-[#1F3D33] text-sm focus:outline-none focus:ring-2 focus:ring-[#7FAF9C]/40 transition-all cursor-pointer"
                    >
                      {OPCOES_NECESSIDADE.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {erros.necessidade && (
                      <p className="text-xs text-red-600 mt-1">{erros.necessidade}</p>
                    )}
                  </div>

                  {/* Botão Enviar Mensagem */}
                  <button
                    type="submit"
                    disabled={carregando}
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-[#2E5E4E] hover:bg-[#1F3D33] text-white py-4 rounded-2xl font-heading font-semibold text-base shadow-organic hover:shadow-organic-lg transition-all duration-200 hover:scale-[1.01] active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {carregando ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Enviando para a Drica...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar mensagem</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#A0A0A0] pt-1">
                    Seus dados são usados com privacidade para responder ao seu contato.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Canais rápidos de contato abaixo dos cards */}
        <div className="mt-12 pt-8 border-t border-[#7FAF9C]/25">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-2xl bg-[#F4F8F6]/60 border border-gray-100 hover:border-[#7FAF9C] hover:bg-[#EAF2EF] transition-all text-sm text-[#1F3D33] group"
            >
              <div className="w-10 h-10 rounded-full bg-[#EAF2EF] group-hover:bg-[#2E5E4E] text-[#2E5E4E] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-[#7FAF9C] font-semibold block truncate">
                  WhatsApp Direto
                </span>
                <span className="font-heading font-bold text-sm text-[#1F3D33] truncate block">
                  {WHATSAPP_DISPLAY}
                </span>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F4F8F6]/60 border border-gray-100 text-sm text-[#1F3D33]">
              <div className="w-10 h-10 rounded-full bg-[#EAF2EF] text-[#2E5E4E] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-[#7FAF9C] font-semibold block truncate">
                  E-mail Oficial
                </span>
                <span className="font-heading font-medium text-sm text-[#1F3D33] truncate block">
                  {EMAIL_DISPLAY}
                </span>
              </div>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do BASE 6 STUDIO"
              className="flex items-center gap-3 p-4 rounded-2xl bg-[#F4F8F6]/60 border border-gray-100 hover:border-[#7FAF9C] hover:bg-[#EAF2EF] transition-all text-sm text-[#1F3D33] group"
            >
              <div className="w-10 h-10 rounded-full bg-[#EAF2EF] group-hover:bg-[#2E5E4E] text-[#2E5E4E] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-xs text-[#7FAF9C] font-semibold block truncate">
                  Siga no Instagram
                </span>
                <span className="font-heading font-bold text-sm text-[#1F3D33] group-hover:text-[#2E5E4E] transition-colors truncate block">
                  {INSTAGRAM_HANDLE}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactFormSection
