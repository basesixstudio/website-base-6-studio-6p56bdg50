import React from 'react'
import { Sparkles, Play, Youtube, ArrowRight } from 'lucide-react'
import { getWhatsAppLink } from '@/components/StudioLogo'
import dricaInsightFoto from '@/assets/dricainsight-a719e.png'

export const DricasVideoSection: React.FC = () => {
  const videoId = 'fAXWaW8qzto'
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`
  const whatsappUrl = getWhatsAppLink(
    'Olá, Drica! Assisti ao seu vídeo de Dicas da Drica e gostaria de agendar uma aula experimental. 🌿',
  )

  return (
    <section
      id="dicas-da-drica"
      className="py-20 bg-gradient-to-b from-[#FFFFFF] via-[#F4F8F6] to-[#FFFFFF] relative overflow-hidden"
    >
      {/* Detalhes orgânicos de fundo na paleta oficial */}
      <div className="absolute top-1/4 -left-24 w-80 h-80 rounded-full bg-[#7FAF9C]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-88 h-88 rounded-full bg-[#2E5E4E]/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Cabeçalho acolhedor no tom da Drica */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2EF] text-[#2E5E4E] text-xs font-heading font-semibold uppercase tracking-wider mb-3 border border-[#7FAF9C]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2E5E4E]" />
            Dicas da Drica • Em Vídeo
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1F3D33] leading-tight">
            Dicas da Drica
          </h2>
          <p className="font-heading font-medium text-base text-[#2E5E4E] mt-3">
            Dá o play e vem aprender comigo: dicas rápidas de movimento, saúde e cuidado para o seu
            dia a dia.
          </p>
        </div>

        {/* Contêiner do Player de Vídeo com cantos orgânicos generosos e sombra suave */}
        <div className="relative mx-auto max-w-4xl">
          {/* Brilho suave e moldura decorativa externa */}
          <div className="relative p-2 sm:p-3 rounded-[32px] sm:rounded-[36px] bg-gradient-to-tr from-[#7FAF9C]/30 via-white to-[#2E5E4E]/20 shadow-organic border border-[#7FAF9C]/40">
            <div className="relative w-full aspect-video rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#1F3D33] shadow-inner">
              <iframe
                src={embedUrl}
                title="Dicas da Drica - BASE 6 STUDIO"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>
          </div>

          {/* Card complementar com o acolhimento da Drica */}
          <div className="mt-8 bg-white rounded-[24px] p-5 sm:p-6 border border-[#7FAF9C]/40 shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3.5 text-left w-full sm:w-auto">
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#2E5E4E] bg-[#2E5E4E]/10 shadow-xs">
                  <img
                    src={dricaInsightFoto}
                    alt="Prof.ª Adriana Mello de Lima (Drica), porta-voz oficial do BASE 6 STUDIO em Niterói/RJ"
                    className="w-full h-full object-cover object-[50%_15%]"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#2E5E4E] text-white p-1 rounded-full shadow-xs">
                  <Play className="w-2.5 h-2.5 fill-current" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold font-heading text-[#2E5E4E] uppercase tracking-wider">
                  Drica • Porta-voz & Profissional de Educação Física
                </span>
                <p className="text-xs sm:text-sm text-[#1F3D33] mt-0.5 leading-relaxed">
                  "O movimento cura quando é feito com intenção, carinho e respeito ao seu próprio
                  ritmo."
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0 justify-end">
              <a
                href="https://youtu.be/fAXWaW8qzto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#7FAF9C]/40 text-xs font-heading font-semibold text-[#1F3D33] hover:text-[#2E5E4E] hover:bg-[#F4F8F6] transition-colors"
                aria-label="Abrir vídeo no YouTube"
              >
                <Youtube className="w-4 h-4 text-red-600" />
                <span>Ver no YouTube</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#2E5E4E] hover:bg-[#1F3D33] text-white px-5 py-2.5 rounded-full text-xs font-heading font-semibold shadow-xs hover:shadow-md transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Agendar com a Drica</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DricasVideoSection
