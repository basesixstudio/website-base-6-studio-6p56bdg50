import React, { useState } from 'react'
import { Send, CheckCircle2, MessageCircle, Mail, User, HelpCircle, Loader2 } from 'lucide-react'
import { criarContato, type NecessidadeTipo } from '@/services/contatos'
import { useToast } from '@/hooks/use-toast'
import { getWhatsAppLink } from '@/components/StudioLogo'

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
        className: 'bg-[#2E7D32] text-white border-none shadow-lg',
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
          {/* Lado Esquerdo: Texto explicativo e contato rápido */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold uppercase tracking-wider mb-3">
                Primeiro Passo
              </div>
              <h2 className="font-serif italic font-bold text-3xl sm:text-4xl text-[#1B3A1B] leading-tight">
                Diga um oi para a Drica.
              </h2>
              <p className="text-base text-[#4A7C59] mt-3 leading-relaxed">
                Preencha o formulário abaixo que retornamos com todo o carinho e as melhores opções
                para o seu momento.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F4F9F4] border border-[#C8E6C9] flex flex-col gap-3.5">
              <p className="font-serif italic text-sm text-[#1B3A1B]">
                "Você não precisa chegar sabendo tudo. Nossa conversa começa pelo que você está
                sentindo hoje."
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#2E7D32]">
                <span>— Drica</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-[#81C784] hover:bg-[#E8F5E9]/30 transition-all text-sm text-[#1B3A1B] group"
              >
                <div className="w-9 h-9 rounded-full bg-[#E8F5E9] group-hover:bg-[#25D366] text-[#2E7D32] group-hover:text-white flex items-center justify-center transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#4A7C59] block">
                    Prefere conversar no WhatsApp?
                  </span>
                  <span className="font-semibold text-sm">(21) 99444-8482</span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 text-sm text-[#1B3A1B]">
                <div className="w-9 h-9 rounded-full bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#4A7C59] block">E-mail para dúvidas</span>
                  <span className="font-semibold text-sm">basesixstudio@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário com visual orgânico */}
          <div className="lg:col-span-7">
            <div className="bg-[#F4F9F4] p-8 sm:p-10 rounded-[32px] border border-[#C8E6C9] shadow-organic">
              {sucesso ? (
                <div className="py-8 text-center flex flex-col items-center gap-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#E8F5E9] border-2 border-[#81C784] flex items-center justify-center text-[#2E7D32] shadow-xs">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-serif italic font-bold text-2xl text-[#1B3A1B]">
                    Recebi sua mensagem!
                  </h3>
                  <p className="text-sm text-[#4A7C59] max-w-md leading-relaxed">
                    Muito obrigado pelo contato. Em breve você terá a resposta da Drica para
                    agendarmos sua conversa ou aula experimental.
                  </p>
                  <button
                    onClick={() => setSucesso(false)}
                    className="mt-4 text-xs font-bold text-[#2E7D32] hover:underline uppercase tracking-wider"
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
                      className="block text-xs font-bold text-[#1B3A1B] uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
                    >
                      <User className="w-3.5 h-3.5 text-[#2E7D32]" />
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
                          : 'border-[#C8E6C9] focus:border-[#2E7D32]'
                      } text-[#1B3A1B] placeholder:text-[#4A7C59]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#81C784]/40 transition-all`}
                    />
                    {erros.nome && <p className="text-xs text-red-600 mt-1">{erros.nome}</p>}
                  </div>

                  {/* Campo Contato */}
                  <div>
                    <label
                      htmlFor="campo-contato"
                      className="block text-xs font-bold text-[#1B3A1B] uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#2E7D32]" />
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
                          : 'border-[#C8E6C9] focus:border-[#2E7D32]'
                      } text-[#1B3A1B] placeholder:text-[#4A7C59]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#81C784]/40 transition-all`}
                    />
                    {erros.contato && <p className="text-xs text-red-600 mt-1">{erros.contato}</p>}
                  </div>

                  {/* Campo O que você precisa (Select) */}
                  <div>
                    <label
                      htmlFor="campo-necessidade"
                      className="block text-xs font-bold text-[#1B3A1B] uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-[#2E7D32]" />
                      O que você precisa? *
                    </label>
                    <select
                      id="campo-necessidade"
                      value={necessidade}
                      onChange={(e) => {
                        setNecessidade(e.target.value as NecessidadeTipo)
                        if (erros.necessidade) setErros({ ...erros, necessidade: undefined })
                      }}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#C8E6C9] focus:border-[#2E7D32] text-[#1B3A1B] text-sm focus:outline-none focus:ring-2 focus:ring-[#81C784]/40 transition-all cursor-pointer"
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
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-[#2E7D32] hover:bg-[#256629] text-white py-4 rounded-2xl font-semibold text-base shadow-organic hover:shadow-organic-lg transition-all duration-200 hover:scale-[1.01] active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
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

                  <p className="text-[11px] text-center text-[#4A7C59]/75 pt-1">
                    Seus dados são usados exclusivamente para responder seu contato com carinho e
                    respeito.
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
