import React from 'react'
import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { PrinciplesSection } from '@/components/PrinciplesSection'
import { SocialProofSection } from '@/components/SocialProofSection'
import { DricasVideoSection } from '@/components/DricasVideoSection'
import { FaqSection } from '@/components/FaqSection'
import { PlansSection } from '@/components/PlansSection'
import { ContactFormSection } from '@/components/ContactFormSection'

const Index: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Página de apresentação (Hero com proposta de valor, Drica e Reformer) */}
      <HeroSection />

      {/* 2. Serviços em destaque (Pilates contemporâneo, clínico, plataforma WBV, avaliações, aulas experimentais, planos) */}
      <ServicesSection />

      {/* 3. Os Seis Princípios do Método Pilates (Powerhouse, Respiração, Concentração, Controle, Precisão, Fluidez) */}
      <PrinciplesSection />

      {/* 4. Prova social (depoimentos, contadores animados, frase Drica) */}
      <SocialProofSection />

      {/* 5. Seção de vídeo "Dicas da Drica" (YouTube embed fAXWaW8qzto) */}
      <DricasVideoSection />

      {/* 6. Perguntas Frequentes (FAQ otimizado para SEO e buscas por IA) */}
      <FaqSection />

      {/* 7. Planos (Pilates, Plataforma e Pilates + Plataforma em 1x, 2x e 3x/sem.) */}
      <PlansSection />

      {/* 8. Formulário de contato ("Diga um oi para a Drica" + dica escrita) */}
      <ContactFormSection />
    </div>
  )
}

export default Index
