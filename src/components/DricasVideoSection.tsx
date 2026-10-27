import React from 'react'
import {
  Sparkles,
  Youtube,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Heart,
  Award,
} from 'lucide-react'
import { getWhatsAppLink, SPOTIFY_PLAYLIST_URL, YOUTUBE_VIDEO_URL } from '@/components/StudioLogo'
import dricaInsightFoto from '@/assets/dricainsight-a719e.png'

export const DricasVideoSection: React.FC = () => {
  const videoId = 'fAXWaW8qzto'
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`
  const whatsappUrl = getWhatsAppLink(
    'Olá! Vim pelo site do BASE 6 STUDIO e gostaria de agendar uma aula experimental. 🌿',
  )

  const credenciais = [
    'Profissional de Educação Física com mais de +23 anos de experiência',
    'Especialista em Pilates e no trabalho com plataforma vibratória',
    'Atuação dedicada ao público da melhor idade',
  ]

  return (
    <section
      id="dicas-da-drica"
      className="py-20 sm:py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F4F8F6] to-[#FFFFFF] relative overflow-hidden"
    >
      {/* Detalhes orgânicos de fundo na paleta oficial */}
      <div className="absolute top-1/6 -left-28 w-96 h-96 rounded-full bg-[#7FAF9C]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/5 -right-28 w-96 h-96 rounded-full bg-[#2E5E4E]/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Cabeçalho padrão da seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2EF] text-[#2E5E4E] text-xs font-heading font-semibold uppercase tracking-wider mb-3 border border-[#7FAF9C]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2E5E4E]" />
            Porta-voz & Profissional de Educação Física
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1F3D33] leading-tight">
            Quem é Drica
          </h2>
        </div>

        {/* Bloco Principal em 2 Colunas: Foto/Avatar + História e Credenciais */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16 sm:mb-20">
          {/* Coluna da Imagem / Perfil da Drica */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              {/* Brilho e moldura orgânica exterior */}
              <div className="relative p-3 sm:p-4 rounded-[36px] sm:rounded-[42px] bg-gradient-to-tr from-[#7FAF9C]/30 via-white to-[#2E5E4E]/20 shadow-organic border border-[#7FAF9C]/40">
                <div className="relative aspect-[4/5] rounded-[28px] sm:rounded-[34px] overflow-hidden bg-[#1F3D33] shadow-inner animate-drica-avatar-entrance">
                  <img
                    src={dricaInsightFoto}
                    alt="Drica, porta-voz do BASE 6 STUDIO em Niterói/RJ"
                    className="w-full h-full object-cover object-[50%_15%] drica-avatar-interactive cursor-pointer select-none"
                    loading="lazy"
                  />
                  {/* Gradiente sutil na base da foto */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1F3D33]/85 via-[#1F3D33]/30 to-transparent pointer-events-none" />

                  {/* Legenda sobreposta na base da foto */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10 pointer-events-none">
                    <p className="text-base sm:text-lg font-bold font-heading leading-tight drop-shadow-xs text-white">
                      Drica
                    </p>
                  </div>
                </div>
              </div>

              {/* Selos flutuantes decorativos */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#2E5E4E] text-xs font-heading font-semibold border border-[#7FAF9C]/40 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#2E5E4E]" />
                  Porta-voz & Profissional de Ed. Física
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#1F3D33] text-xs font-heading font-semibold border border-[#7FAF9C]/40 shadow-2xs">
                  <Award className="w-4 h-4 text-[#2E5E4E]" />
                  +23 anos
                </span>
              </div>
            </div>
          </div>

          {/* Coluna de Texto: Subtítulo, Parágrafos de Abertura, Credenciais e "Como ela conduz" */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-[#1F3D33]">
            {/* Subtítulo em destaque com a frase solicitada */}
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#1F3D33] leading-snug">
                Mais de +23 anos de experiência cuidando de quem você é
              </h3>
            </div>
            {/* Parágrafos de abertura */}
            <div className="space-y-4 text-base sm:text-lg text-[#1F3D33]/90 leading-relaxed font-body">
              <p>
                Drica é a porta-voz do BASE 6 STUDIO e a tradução mais generosa do que acreditamos:
                cuidar do corpo é, antes de tudo, cuidar de uma história.
              </p>
              <p>
                Com mais de +23 anos de experiência em Educação Física, ela construiu uma trajetória
                dedicada ao movimento consciente e, sobretudo, às pessoas que descobrem o prazer de
                se mover — ou que retomam esse encontro depois de um tempo. Foi entre elas que
                encontrou sua vocação: uma presença que é, ao mesmo tempo, firme e suave.
              </p>
            </div>

            {/* Bloco "Credenciais" */}
            <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-[#7FAF9C]/40 shadow-subtle my-2">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-[#2E5E4E]" />
                <h4 className="font-heading font-bold text-lg text-[#1F3D33]">Credenciais</h4>
              </div>
              <ul className="space-y-3">
                {credenciais.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2E5E4E] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#1F3D33] font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subtítulo interno "Como ela conduz" + parágrafos */}
            <div className="space-y-4 mt-2">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#2E5E4E]" />
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#1F3D33]">
                  Como ela conduz
                </h3>
              </div>
              <p className="text-base sm:text-lg text-[#1F3D33]/90 leading-relaxed font-body">
                Drica une rigor técnico a um olhar atento de quem aprendeu, na prática, que cada
                corpo tem seu próprio ritmo. A aula começa antes do primeiro movimento: no sorriso
                com que recebe cada aluno pelo nome, na pergunta sincera sobre como foi a semana, na
                atenção aos sinais que o corpo envia e que tanta gente aprendeu a ignorar.
              </p>
              <p className="text-base sm:text-lg text-[#1F3D33]/90 leading-relaxed font-body">
                É gentil e é firme. Gentileza para acolher, firmeza para não abrir mão da segurança.
                Explica o que faz sentido, corrige o que precisa, mas nunca faz ninguém se sentir
                menor por não saber. Postura elegante, sorriso no rosto, presença serena: conduz a
                aula como quem conduz uma boa conversa — com espaço para todos e direção clara.
              </p>
            </div>

            {/* Fechamento emocional */}
            <div className="p-5 sm:p-6 rounded-[20px] bg-[#EAF2EF]/80 border-l-4 border-[#2E5E4E] my-1">
              <p className="text-base sm:text-lg font-medium text-[#1F3D33] leading-relaxed italic font-body">
                "Com ela, o BASE 6 STUDIO fala a língua de quem chega com dor e medo, e sai com
                confiança. Técnica que explica, experiência que tranquiliza, competência que
                acolhe."
              </p>
            </div>

            {/* CTA Final da Apresentação */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="font-heading font-semibold text-base sm:text-lg text-[#1F3D33]">
                Quer conhecer a aula da Drica?
              </span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2E5E4E] hover:bg-[#1F3D33] text-white px-6 py-3 rounded-full text-sm font-heading font-semibold shadow-xs hover:shadow-md transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Agendar Aula Experimental</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Card em Destaque do Vídeo "Dica da Drica" + Playlist Spotify (mantido integralmente) */}
        <div className="mt-8 bg-white rounded-[32px] p-6 sm:p-10 border border-[#7FAF9C]/40 shadow-subtle relative overflow-hidden">
          {/* Detalhe de fundo */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#7FAF9C]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Cabeçalho do Bloco de Vídeo */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2EF] text-[#2E5E4E] text-xs font-heading font-semibold uppercase tracking-wider mb-2 border border-[#7FAF9C]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#2E5E4E]" />
                Em Vídeo
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#1F3D33]">
                Dica da Drica
              </h3>
              <p className="font-body text-sm sm:text-base text-[#2E5E4E] mt-2 max-w-xl mx-auto">
                Dá o play e vem aprender com ela: orientações práticas de movimento consciente,
                saúde e bem-estar para o seu dia a dia.
              </p>
            </div>

            {/* Player do YouTube emoldurado */}
            <div className="relative p-2 sm:p-3 rounded-[28px] sm:rounded-[32px] bg-gradient-to-tr from-[#7FAF9C]/30 via-white to-[#2E5E4E]/20 shadow-organic border border-[#7FAF9C]/40">
              <div className="relative w-full aspect-video rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#1F3D33] shadow-inner">
                <iframe
                  src={embedUrl}
                  title="Dica da Drica - BASE 6 STUDIO"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full border-0"
                />
              </div>
            </div>

            {/* Barra de Ações do Vídeo (Spotify, YouTube e WhatsApp) */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#7FAF9C]/20">
              <p className="text-xs sm:text-sm text-[#1F3D33]/80 text-center sm:text-left font-body">
                Acompanhe também as trilhas sonoras das aulas e nossos conteúdos em vídeo:
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5 sm:gap-3 w-full sm:w-auto">
                <a
                  href={SPOTIFY_PLAYLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#7FAF9C]/50 bg-[#F4F8F6]/80 text-xs font-heading font-semibold text-[#2E5E4E] hover:text-[#1F3D33] hover:bg-[#EAF2EF] hover:border-[#7FAF9C] transition-colors shadow-2xs"
                  aria-label="Ouvir as playlists do BASE 6 STUDIO no Spotify"
                  title="Playlists oficiais do estúdio"
                >
                  <span className="text-[#1DB954] inline-flex items-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3.5 h-3.5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zm4.586 14.424a.627.627 0 0 1-.861.208c-2.358-1.441-5.326-1.767-8.823-.968a.627.627 0 1 1-.278-1.223c3.824-.874 7.104-.504 9.754 1.122a.627.627 0 0 1 .208.861zm1.225-2.724a.784.784 0 0 1-1.079.258c-2.7-1.66-6.816-2.138-10.01-1.168a.784.784 0 1 1-.453-1.5c3.649-1.107 8.193-.574 11.284 1.331a.785.785 0 0 1 .258 1.079zm.106-2.835C14.68 8.94 9.35 8.763 6.257 9.702a.94.94 0 0 1-.55-1.796c3.553-1.078 9.444-.874 13.208 1.361a.941.941 0 0 1-.998 1.604z" />
                    </svg>
                  </span>
                  <span>🎧 Playlist no Spotify</span>
                </a>

                <a
                  href={YOUTUBE_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#7FAF9C]/40 text-xs font-heading font-semibold text-[#1F3D33] hover:text-[#2E5E4E] hover:bg-[#F4F8F6] transition-colors"
                  aria-label="Abrir vídeo no YouTube"
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                  <span>Ver no YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DricasVideoSection
