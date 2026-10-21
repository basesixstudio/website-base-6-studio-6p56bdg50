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

export async function criarContato(data: NovoContatoData): Promise<ContatoRecord> {
  const payload = {
    nome: data.nome.trim(),
    contato: data.contato.trim(),
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
    // Sanitiza aspas simples
    const cleanSearch = buscaNome.replace(/'/g, "\\'")
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
