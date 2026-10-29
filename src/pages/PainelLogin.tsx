import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Lock, Mail, ArrowRight, Loader2, Sparkles, AlertCircle } from 'lucide-react'
import pb from '@/lib/pocketbase/client'
import { StudioLogo } from '@/components/StudioLogo'
import { useToast } from '@/hooks/use-toast'
import { useNoIndex } from '@/hooks/use-no-index'

export const PainelLogin: React.FC = () => {
  useNoIndex()
  const navigate = useNavigate()
  const { toast } = useToast()

  const [email, setEmail] = useState('basesixstudio@gmail.com')
  const [password, setPassword] = useState('Skip@Pass')
  const [carregando, setCarregando] = useState(false)
  const [tentativas, setTentativas] = useState(0)
  const [bloqueadoAte, setBloqueadoAte] = useState<number | null>(null)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    if (pb.authStore.isValid) {
      // Validar expiração antes de redirecionar direto
      try {
        const token = pb.authStore.token
        const payload = JSON.parse(atob(token.split('.')[1] || '{}'))
        if (payload.exp && payload.exp * 1000 < Date.now()) {
          pb.authStore.clear()
          return
        }
      } catch {
        // Ignorar
      }
      navigate('/painel', { replace: true })
    }
  }, [navigate])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setErro(null)

    if (bloqueadoAte && Date.now() < bloqueadoAte) {
      const segundosRestantes = Math.ceil((bloqueadoAte - Date.now()) / 1000)
      setErro(
        `Muitas tentativas incorretas. Aguarde ${segundosRestantes} segundos antes de tentar novamente.`,
      )
      return
    }

    if (!email || !password) {
      setErro('Preencha e-mail e senha para acessar.')
      return
    }

    setCarregando(true)
    try {
      await pb.collection('users').authWithPassword(email.trim(), password)
      setTentativas(0)
      setBloqueadoAte(null)
      toast({
        title: 'Bem-vinda, Drica!',
        description: 'Login realizado com sucesso. Carregando os contatos...',
        className: 'bg-[#2E7D32] text-white border-none',
      })
      navigate('/painel', { replace: true })
    } catch {
      const novaContagem = tentativas + 1
      setTentativas(novaContagem)
      if (novaContagem >= 5) {
        const timeoutMs = 30000 // Bloqueia 30 segundos após 5 tentativas
        setBloqueadoAte(Date.now() + timeoutMs)
        setErro(
          'Muitas tentativas incorretas. Acesso bloqueado por 30 segundos para sua segurança.',
        )
      } else {
        setErro('E-mail ou senha incorretos. Verifique suas credenciais.')
      }
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4F8F6] via-white to-[#EAF2EF] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card do formulário */}
        <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-organic border border-[#7FAF9C]/40">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block hover:scale-105 transition-transform mb-4">
              <StudioLogo size="lg" />
            </Link>
            <h1 className="font-heading font-bold text-2xl text-[#1F3D33]">Acesso ao Painel</h1>
            <p className="text-xs text-[#2E5E4E] mt-1">
              Área administrativa de contatos da Drica e equipe
            </p>
          </div>

          {erro && (
            <div className="mb-6 p-3.5 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700 animate-fade-in">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{erro}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-heading font-bold text-[#1F3D33] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#2E5E4E]" />
                E-mail
              </label>
              <input
                type="email"
                required
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="basesixstudio@gmail.com"
                className="w-full px-4 py-3 rounded-2xl bg-[#F4F8F6] border border-[#7FAF9C]/40 focus:border-[#2E5E4E] text-sm text-[#1F3D33] focus:outline-none focus:ring-2 focus:ring-[#7FAF9C]/40 transition-all"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-heading font-bold text-[#1F3D33] uppercase tracking-wider flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#2E5E4E]" />
                  Senha
                </label>
                <Link
                  to="/recuperar-senha"
                  className="text-xs text-[#2E5E4E] hover:underline font-semibold font-heading"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <input
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-2xl bg-[#F4F8F6] border border-[#7FAF9C]/40 focus:border-[#2E5E4E] text-sm text-[#1F3D33] focus:outline-none focus:ring-2 focus:ring-[#7FAF9C]/40 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={carregando}
              className="w-full mt-2 flex items-center justify-center gap-2 bg-[#2E5E4E] hover:bg-[#1F3D33] text-white py-3.5 rounded-2xl font-heading font-semibold text-sm shadow-organic hover:shadow-md transition-all disabled:opacity-60 cursor-pointer"
            >
              {carregando ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Entrando...</span>
                </>
              ) : (
                <>
                  <span>Entrar no Painel</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Dica de credencial padrão para conveniência */}
          <div className="mt-6 pt-5 border-t border-gray-100 flex items-start gap-2.5 p-3 rounded-xl bg-[#EAF2EF] text-xs text-[#2E5E4E]">
            <Sparkles className="w-4 h-4 shrink-0 mt-0.5 text-[#2E5E4E]" />
            <div>
              <p className="font-heading font-semibold">Credenciais de acesso:</p>
              <p className="text-[11px] text-[#1F3D33]/80 font-mono mt-0.5">
                basesixstudio@gmail.com / Skip@Pass
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-xs text-[#2E5E4E] hover:text-[#1F3D33] font-semibold font-heading transition-colors"
          >
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  )
}
export default PainelLogin
