import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import pb from '@/lib/pocketbase/client'
import { StudioLogo } from '@/components/StudioLogo'
import { useNoIndex } from '@/hooks/use-no-index'

export const VerificarEmail: React.FC = () => {
  useNoIndex()
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token') || ''
  const navigate = useNavigate()

  const [carregando, setCarregando] = useState(true)
  const [sucesso, setSucesso] = useState(false)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    if (!token) {
      setCarregando(false)
      setErro('Token de verificação ausente na URL.')
      return
    }

    pb.collection('users')
      .confirmVerification(token)
      .then(() => {
        setSucesso(true)
        setCarregando(false)
        setTimeout(() => {
          navigate('/painel/login')
        }, 3000)
      })
      .catch((err) => {
        console.error('Erro na verificação de e-mail:', err)
        setErro('Token inválido ou expirado.')
        setCarregando(false)
      })
  }, [token, navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4F8F6] via-white to-[#EAF2EF] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-organic border border-[#7FAF9C]/40 text-center">
          <Link to="/" className="inline-block hover:scale-105 transition-transform mb-4">
            <StudioLogo size="lg" />
          </Link>

          <h1 className="font-heading font-bold text-2xl text-[#1F3D33] mb-2">
            Verificação de E-mail
          </h1>

          {carregando && (
            <div className="py-8 flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 text-[#2E7D32] animate-spin" />
              <p className="text-sm text-[#4A7C59]">Confirmando seu e-mail...</p>
            </div>
          )}

          {!carregando && sucesso && (
            <div className="py-6 space-y-4 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-[#E8F5E9] border-2 border-[#81C784] flex items-center justify-center text-[#2E7D32] mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <p className="text-sm text-[#1B3A1B]">Seu e-mail foi verificado com sucesso!</p>
              <Link
                to="/painel/login"
                className="inline-block bg-[#2E5E4E] text-white px-6 py-2.5 rounded-full text-xs font-heading font-semibold hover:bg-[#1F3D33]"
              >
                Acessar o Painel
              </Link>
            </div>
          )}

          {!carregando && erro && (
            <div className="py-6 space-y-4 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-red-50 border-2 border-red-300 flex items-center justify-center text-red-600 mx-auto">
                <AlertCircle className="w-8 h-8" />
              </div>
              <p className="text-sm text-red-700">{erro}</p>
              <Link
                to="/painel/login"
                className="inline-block text-xs font-heading font-bold text-[#2E5E4E] hover:underline"
              >
                Ir para o login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default VerificarEmail
