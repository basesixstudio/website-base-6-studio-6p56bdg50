import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowRight, Loader2, CheckCircle2, ArrowLeft } from 'lucide-react'
import pb from '@/lib/pocketbase/client'
import { StudioLogo } from '@/components/StudioLogo'
import { useToast } from '@/hooks/use-toast'

export const RecuperarSenha: React.FC = () => {
  const { toast } = useToast()
  const [email, setEmail] = useState('')
  const [carregando, setCarregando] = useState(false)
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setCarregando(true)
    try {
      await pb.collection('users').requestPasswordReset(email.trim())
      setEnviado(true)
      toast({
        title: 'E-mail enviado',
        description: 'Se o e-mail estiver cadastrado, você receberá o link de redefinição.',
        className: 'bg-[#2E7D32] text-white border-none',
      })
    } catch (err) {
      console.error('Erro ao solicitar reset:', err)
      // Por segurança contra enumeração, ainda informa sucesso
      setEnviado(true)
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
            <h1 className="font-heading font-bold text-2xl text-[#1F3D33]">Recuperar Senha</h1>
            <p className="text-xs text-[#2E5E4E] mt-1">
              Informe seu e-mail para receber as instruções de recuperação
            </p>
          </div>

          {enviado ? (
            <div className="text-center py-4 space-y-4 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-[#E8F5E9] border-2 border-[#81C784] flex items-center justify-center text-[#2E7D32] mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <p className="text-sm text-[#1B3A1B] leading-relaxed">
                Verifique a caixa de entrada de <strong>{email}</strong>. Enviamos o link com as
                instruções para redefinir sua senha.
              </p>
              <Link
                to="/painel/login"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#2E5E4E] text-white py-3 rounded-2xl text-sm font-heading font-semibold hover:bg-[#1F3D33] transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar para o Login</span>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-heading font-bold text-[#1F3D33] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#2E5E4E]" />
                  Seu e-mail cadastrado
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="basesixstudio@gmail.com"
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
                    <span>Enviando link...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar instruções</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="pt-2 text-center">
                <Link
                  to="/painel/login"
                  className="text-xs text-[#2E5E4E] hover:text-[#1F3D33] font-semibold font-heading transition-colors"
                >
                  Lembrou a senha? Fazer login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
export default RecuperarSenha
