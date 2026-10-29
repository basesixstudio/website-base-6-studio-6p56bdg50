import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import pb from '@/lib/pocketbase/client'
import { Loader2 } from 'lucide-react'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation()
  const [checking, setChecking] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => pb.authStore.isValid)

  useEffect(() => {
    // Inscreve no authStore para reagir caso expire ou o usuário deslogue
    const unsubscribe = pb.authStore.onChange(() => {
      setIsAuthenticated(pb.authStore.isValid)
    })

    // Validação ativa do token com verificação de expiração
    if (pb.authStore.isValid) {
      // Se tiver token decodificável, checar expiração
      const token = pb.authStore.token
      try {
        const payload = JSON.parse(atob(token.split('.')[1] || '{}'))
        if (payload.exp && payload.exp * 1000 < Date.now()) {
          pb.authStore.clear()
          setIsAuthenticated(false)
          setChecking(false)
          return
        }
      } catch {
        // Token não é JWT ou parsing falhou, deixar pb.authStore.isValid decidir
      }
    }

    setIsAuthenticated(pb.authStore.isValid)
    setChecking(false)

    return () => {
      unsubscribe()
    }
  }, [])

  if (checking) {
    return (
      <div className="min-h-screen bg-[#F4F8F6] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-[#2E5E4E] animate-spin" />
          <p className="text-sm font-semibold text-[#1F3D33]">Verificando autenticação...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/painel/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
