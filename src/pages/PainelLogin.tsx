import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Lock, Mail, ArrowRight, Loader2, Sparkles, AlertCircle } from 'lucide-react'
import pb from '@/lib/pocketbase/client'
import { StudioLogo } from '@/components/StudioLogo'
import { useToast } from '@/hooks/use-toast'

export const PainelLogin: React.FC = () => {
  const navigate = useNavigate()
  const { toast } = useToast()

  const [email, setEmail] = useState('basesixstudio@gmail.com')
  const [password, setPassword] = useState('Skip@Pass')
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    if (pb.authStore.isValid) {
      navigate('/painel', { replace: true })
    }
  }, [navigate])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setErro(null)

    if (!email || !password) {
      setErro('Preencha e-mail e senha para acessar.')
      return
    }

    setCarregando(true)
    try {
      await pb.collection('users').authWithPassword(email.trim(), password)
      toast({
        title: 'Bem-vinda, Drica!',
        description: 'Login realizado com sucesso. Carregando os contatos...',
        className: 'bg-[#2E7D32] text-white border-none',
      })
      navigate('/painel', { replace: true })
    } catch (err) {
      console.error('Erro de autenticação:', err)
      setErro('E-mail ou senha incorretos. Verifique suas credenciais.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F5E9] via-[#F4F9F4] to-[#C8E6C9]/30 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card do formulário */}
        <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-organic border border-[#81C784]/40">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block hover:scale-105 transition-transform mb-4">
              <StudioLogo />
            </Link>
            <h1 className="font-serif italic font-bold text-2xl text-[#1B3A1B]">
              Acesso ao Painel
            </h1>
            <p className="text-xs text-[#4A7C59] mt-1">
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
              <label className="block text-xs font-bold text-[#1B3A1B] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#2E7D32]" />
                E-mail
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="basesixstudio@gmail.com"
                className="w-full px-4 py-3 rounded-2xl bg-[#F4F9F4] border border-[#C8E6C9] focus:border-[#2E7D32] text-sm text-[#1B3A1B] focus:outline-none focus:ring-2 focus:ring-[#81C784]/40 transition-all"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-[#1B3A1B] uppercase tracking-wider flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#2E7D32]" />
                  Senha
                </label>
                <Link
                  to="/recuperar-senha"
                  className="text-xs text-[#2E7D32] hover:underline font-semibold"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-2xl bg-[#F4F9F4] border border-[#C8E6C9] focus:border-[#2E7D32] text-sm text-[#1B3A1B] focus:outline-none focus:ring-2 focus:ring-[#81C784]/40 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={carregando}
              className="w-full mt-2 flex items-center justify-center gap-2 bg-[#2E7D32] hover:bg-[#256629] text-white py-3.5 rounded-2xl font-semibold text-sm shadow-organic hover:shadow-md transition-all disabled:opacity-60 cursor-pointer"
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
          <div className="mt-6 pt-5 border-t border-gray-100 flex items-start gap-2.5 p-3 rounded-xl bg-[#E8F5E9]/50 text-xs text-[#2E7D32]">
            <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Credenciais de demonstração:</p>
              <p className="text-[11px] text-[#1B3A1B]/80 font-mono mt-0.5">
                basesixstudio@gmail.com / Skip@Pass
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-xs text-[#4A7C59] hover:text-[#2E7D32] font-semibold transition-colors"
          >
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  )
}
export default PainelLogin
