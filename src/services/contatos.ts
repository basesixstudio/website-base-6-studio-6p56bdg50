import type { RecordModel } from 'pocketbase'
import pb from '@/lib/pocketbase/client'

export type NecessidadeTipo =
  | 'Pilates'
  | 'Pilates Contemporâneo'
  | 'Pilates Clínico'
  | 'Condicionamento'
  | 'Fisioterapia'
  | 'Plataforma Vibratória'
  | 'Avaliação Física'
  | 'Aula Experimental'
  | 'Outro'

export type StatusContato = 'Novo' | 'Em contato' | 'Convertido' | 'Arquivado'

export interface ContatoRecord extends RecordModel {
  nome: string
  contato: string
  necessidade: NecessidadeTipo
  status: StatusContato
}

export interface NovoContatoData {
  nome: string
  contato: string
  necessidade: NecessidadeTipo
  status?: StatusContato
}

// Sanitização contra scripts, tags HTML e caracteres de controle indesejados
export function sanitizarTexto(input: string, maxLen = 500): string {
  if (!input) return ''
  // Remove tags HTML
  const semHtml = input.replace(/<[^>]*>?/gm, '')
  // Filtra caracteres de controle sem regex literal que acione no-control-regex
  let limpo = ''
  for (let i = 0; i < semHtml.length; i++) {
    const code = semHtml.charCodeAt(i)
    if ((code >= 0 && code <= 31) || code === 127) {
      limpo += ' '
    } else {
      limpo += semHtml[i]
    }
  }
  return limpo.replace(/\s+/g, ' ').trim().slice(0, maxLen)
}

export async function criarContato(data: NovoContatoData): Promise<ContatoRecord> {
  const nomeLimpo = sanitizarTexto(data.nome, 120)
  const contatoLimpo = sanitizarTexto(data.contato, 120)

  if (!nomeLimpo || nomeLimpo.length < 2) {
    throw new Error('Nome inválido.')
  }
  if (!contatoLimpo || contatoLimpo.length < 5) {
    throw new Error('Contato inválido.')
  }

  const payload = {
    nome: nomeLimpo,
    contato: contatoLimpo,
    necessidade: data.necessidade,
    status: data.status || 'Novo',
  }
  return await pb.collection<ContatoRecord>('contatos').create(payload)
}

export async function listarContatos(
  filtroStatus?: string,
  buscaNome?: string,
): Promise<ContatoRecord[]> {
  const filtros: string[] = []

  if (filtroStatus && filtroStatus !== 'todos') {
    filtros.push(`status = '${filtroStatus}'`)
  }

  if (buscaNome && buscaNome.trim() !== '') {
    // Sanitiza aspas simples e caracteres de escape da query PocketBase
    const cleanSearch = buscaNome.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
    filtros.push(`nome ~ '${cleanSearch}'`)
  }

  const filterString = filtros.length > 0 ? filtros.join(' && ') : ''

  return await pb.collection<ContatoRecord>('contatos').getFullList({
    filter: filterString,
    sort: '-created',
  })
}

export async function atualizarStatusContato(
  id: string,
  novoStatus: StatusContato,
): Promise<ContatoRecord> {
  return await pb.collection<ContatoRecord>('contatos').update(id, {
    status: novoStatus,
  })
}

export async function excluirContato(id: string): Promise<boolean> {
  return await pb.collection<ContatoRecord>('contatos').delete(id)
}
