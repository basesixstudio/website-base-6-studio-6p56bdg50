import React, { useState } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { Lock, ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import pb from '@/lib/pocketbase/client'
import { StudioLogo } from '@/components/StudioLogo'
import { useToast } from '@/hooks/use-toast'
import { useNoIndex } from '@/hooks/use-no-index'

export const RedefinirSenha: React.FC = () => {
  useNoIndex()
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token') || ''
  const navigate = useNavigate()
  const { toast } = useToast()

  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [sucesso, setSucesso] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErro(null)

    if (!token) {
      setErro('Token de redefinição não encontrado na URL. Use o link recebido por e-mail.')
      return
    }

    if (password.length < 8) {
      setErro('A nova senha deve ter no mínimo 8 caracteres.')
      return
    }

    if (password !== passwordConfirm) {
      setErro('As senhas não conferem.')
      return
    }

    setCarregando(true)
    try {
      await pb.collection('users').confirmPasswordReset(token, password, passwordConfirm)
      setSucesso(true)
      toast({
        title: 'Senha redefinida com sucesso!',
        description: 'Agora você pode acessar o painel com sua nova senha.',
        className: 'bg-[#2E7D32] text-white border-none',
      })
      setTimeout(() => {
        navigate('/painel/login')
      }, 2500)
    } catch (err) {
      console.error('Erro ao redefinir senha:', err)
      setErro('Token inválido ou expirado. Por favor, solicite um novo link de recuperação.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4F8F6] via-white to-[#EAF2EF] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-organic border border-[#7FAF9C]/40">
          <div className="text-center mb-6">
            <Link to="/" className="inline-block hover:scale-105 transition-transform mb-3">
              <StudioLogo size="lg" />
            </Link>
            <h1 className="font-heading font-bold text-2xl text-[#1F3D33]">Redefinir Senha</h1>
            <p className="text-xs text-[#2E5E4E] mt-1">Crie uma nova senha para sua conta</p>
          </div>

          {erro && (
            <div className="mb-6 p-3.5 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700 animate-fade-in">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{erro}</span>
            </div>
          )}

          {sucesso ? (
            <div className="text-center py-4 space-y-4 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-[#E8F5E9] border-2 border-[#81C784] flex items-center justify-center text-[#2E7D32] mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <p className="text-sm text-[#1B3A1B]">
                Sua senha foi redefinida com sucesso! Redirecionando para o login...
              </p>
              <Link
                to="/painel/login"
                className="inline-block text-xs font-heading font-bold text-[#2E5E4E] hover:underline uppercase"
              >
                Ir para o login agora
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-heading font-bold text-[#1F3D33] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#2E5E4E]" />
                  Nova Senha (mín. 8 caracteres)
                </label>
                <input
                  type="password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-2xl bg-[#F4F8F6] border border-[#7FAF9C]/40 focus:border-[#2E5E4E] text-sm text-[#1F3D33] focus:outline-none focus:ring-2 focus:ring-[#7FAF9C]/40 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold text-[#1F3D33] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#2E5E4E]" />
                  Confirmar Nova Senha
                </label>
                <input
                  type="password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-2xl bg-[#F4F8F6] border border-[#7FAF9C]/40 focus:border-[#2E5E4E] text-sm text-[#1F3D33] focus:outline-none focus:ring-2 focus:ring-[#7FAF9C]/40 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={carregando}
                className="w-full flex items-center justify-center gap-2 bg-[#2E5E4E] hover:bg-[#1F3D33] text-white py-3.5 rounded-2xl font-heading font-semibold text-sm shadow-organic hover:shadow-md transition-all disabled:opacity-60 cursor-pointer"
              >
                {carregando ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Salvando...</span>
                  </>
                ) : (
                  <>
                    <span>Atualizar senha</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="pt-2 text-center">
                <Link
                  to="/painel/login"
                  className="text-xs text-[#2E5E4E] hover:text-[#1F3D33] font-semibold font-heading transition-colors"
                >
                  Voltar para o Login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
export default RedefinirSenha
