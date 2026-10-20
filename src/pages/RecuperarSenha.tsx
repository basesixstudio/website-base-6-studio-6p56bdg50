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
    <div className="min-h-screen bg-gradient-to-br from-[#E8F5E9] via-[#F4F9F4] to-[#C8E6C9]/30 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-organic border border-[#81C784]/40">
          <div className="text-center mb-6">
            <Link to="/" className="inline-block hover:scale-105 transition-transform mb-3">
              <StudioLogo />
            </Link>
            <h1 className="font-serif italic font-bold text-2xl text-[#1B3A1B]">Recuperar Senha</h1>
            <p className="text-xs text-[#4A7C59] mt-1">
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
                className="inline-flex items-center justify-center gap-2 w-full bg-[#2E7D32] text-white py-3 rounded-2xl text-sm font-semibold hover:bg-[#256629] transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar para o Login</span>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#1B3A1B] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#2E7D32]" />
                  Seu e-mail cadastrado
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

              <button
                type="submit"
                disabled={carregando}
                className="w-full flex items-center justify-center gap-2 bg-[#2E7D32] hover:bg-[#256629] text-white py-3.5 rounded-2xl font-semibold text-sm shadow-organic hover:shadow-md transition-all disabled:opacity-60 cursor-pointer"
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
                  className="text-xs text-[#4A7C59] hover:text-[#2E7D32] font-semibold transition-colors"
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
