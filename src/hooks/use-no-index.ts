import { useEffect } from 'react'

/**
 * Hook para garantir que rotas privadas ou não indexáveis (ex.: /painel, /recuperar-senha)
 * contenham a meta tag <meta name="robots" content="noindex, nofollow" />
 * e restaurem a permissão de indexação normal ao desmontar.
 */
export function useNoIndex() {
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null
    const originalContent = meta ? meta.getAttribute('content') : null

    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'robots'
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', 'noindex, nofollow')

    return () => {
      if (meta) {
        if (originalContent) {
          meta.setAttribute('content', originalContent)
        } else {
          meta.setAttribute(
            'content',
            'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          )
        }
      }
    }
  }, [])
}

export default useNoIndex
