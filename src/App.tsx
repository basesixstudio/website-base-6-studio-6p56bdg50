/* Main App Component - Handles routing, query client and notifications */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Layout from '@/components/Layout'

// Páginas
import Index from '@/pages/Index'
import PainelContatos from '@/pages/PainelContatos'
import PainelLogin from '@/pages/PainelLogin'
import RecuperarSenha from '@/pages/RecuperarSenha'
import RedefinirSenha from '@/pages/RedefinirSenha'
import VerificarEmail from '@/pages/VerificarEmail'
import NotFound from '@/pages/NotFound'

const App = () => (
  <BrowserRouter>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        {/* Rotas Públicas com Layout Global (Navbar, Footer, WhatsApp flutuante) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
        </Route>

        {/* Rotas Administrativas e de Autenticação */}
        <Route path="/painel" element={<PainelContatos />} />
        <Route path="/painel/login" element={<PainelLogin />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/redefinir-senha" element={<RedefinirSenha />} />
        <Route path="/verificar-email" element={<VerificarEmail />} />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
