import React from 'react'
import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { SocialProofSection } from '@/components/SocialProofSection'
import { ContactFormSection } from '@/components/ContactFormSection'

const Index: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Página de apresentação (Hero com proposta de valor e Drica) */}
      <HeroSection />

      {/* 2. Serviços em destaque (8 cards completos) */}
      <ServicesSection />

      {/* 3. Prova social (depoimentos, contadores animados, frase Drica) */}
      <SocialProofSection />

      {/* 4. Formulário de contato (salvando na coleção contatos do PocketBase) */}
      <ContactFormSection />
    </div>
  )
}

export default Index
