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
import { getWhatsAppLink, WHATSAPP_DISPLAY, EMAIL_DISPLAY } from '@/components/StudioLogo'
import dricaInsightFoto from '@/assets/dricainsight-a719e.png'

const OPCOES_NECESSIDADE: NecessidadeTipo[] = [
  'Pilates',
  'Condicionamento',
  'Fisioterapia',
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
    if (!nome.trim()) {
      novosErros.nome = 'Por favor, informe seu nome.'
    } else if (nome.trim().length < 2) {
      novosErros.nome = 'O nome precisa ter pelo menos 2 caracteres.'
    }

    if (!contato.trim()) {
      novosErros.contato = 'Por favor, informe seu WhatsApp ou e-mail para resposta.'
    } else if (contato.trim().length < 5) {
      novosErros.contato = 'Informe um contato válido (ex: (21) 99999-9999 ou seu@email.com).'
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lado Esquerdo: Texto explicativo e acolhimento da Drica */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAF2EF] text-[#2E5E4E] text-xs font-heading font-semibold uppercase tracking-wider mb-3 border border-[#7FAF9C]/30">
                <Sparkles className="w-3 h-3 text-[#2E5E4E]" />
                Primeiro Passo
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1F3D33] leading-tight">
                Diga um oi para a Drica.
              </h2>
              <p className="text-base text-[#1F3D33]/80 mt-3 leading-relaxed">
                Preencha o formulário e nós retornamos com carinho, ouvindo sua história e
                apresentando a melhor alternativa para seu momento.
              </p>
            </div>

            {/* Balão informativo Dica da Drica */}
            <div className="p-5 rounded-2xl bg-[#F4F8F6] border border-[#7FAF9C]/40 flex items-start gap-3.5 shadow-xs">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#2E5E4E] shrink-0 mt-0.5 bg-[#2E5E4E]/10">
                <img
                  src={dricaInsightFoto}
                  alt="Dica da Drica - Porta-voz oficial"
                  className="w-full h-full object-cover object-[50%_15%]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-heading font-bold text-[#2E5E4E] uppercase tracking-wider">
                  Dica da Drica
                </span>
                <p className="text-xs sm:text-sm text-[#1F3D33] leading-relaxed">
                  "Você não precisa chegar sabendo o método. Nossa conversa começa pelo que você
                  sente hoje e onde deseja chegar com saúde e liberdade."
                </p>
              </div>
            </div>

            {/* Links rápidos */}
            <div className="space-y-3 pt-1">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-[#7FAF9C] hover:bg-[#EAF2EF]/50 transition-all text-sm text-[#1F3D33] group"
              >
                <div className="w-9 h-9 rounded-full bg-[#EAF2EF] group-hover:bg-[#2E5E4E] text-[#2E5E4E] group-hover:text-white flex items-center justify-center transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#7FAF9C] font-semibold block">
                    Conversar direto no WhatsApp
                  </span>
                  <span className="font-heading font-bold text-sm text-[#1F3D33]">
                    {WHATSAPP_DISPLAY}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 text-sm text-[#1F3D33]">
                <div className="w-9 h-9 rounded-full bg-[#EAF2EF] text-[#2E5E4E] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#7FAF9C] font-semibold block">E-mail oficial</span>
                  <span className="font-heading font-medium text-sm text-[#1F3D33]">
                    {EMAIL_DISPLAY}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário com visual acolhedor */}
          <div className="lg:col-span-7">
            <div className="bg-[#F4F8F6] p-8 sm:p-10 rounded-[32px] border border-[#7FAF9C]/40 shadow-organic">
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
                      placeholder="Como podemos te chamar?"
                      value={nome}
                      onChange={(e) => {
                        setNome(e.target.value)
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
                      placeholder="Ex: (21) 99444-8482 ou seu@email.com"
                      value={contato}
                      onChange={(e) => {
                        setContato(e.target.value)
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
      </div>
    </section>
  )
}
export default ContactFormSection
