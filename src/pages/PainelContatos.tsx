import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  Search,
  RefreshCw,
  LogOut,
  Trash2,
  Phone,
  Calendar,
  Sparkles,
  UserCheck,
  CheckCircle,
  Clock,
  Archive,
  ExternalLink,
  PlusCircle,
} from 'lucide-react'
import pb from '@/lib/pocketbase/client'
import { useRealtime } from '@/hooks/use-realtime'
import {
  listarContatos,
  atualizarStatusContato,
  excluirContato,
  criarContato,
  type ContatoRecord,
  type StatusContato,
  type NecessidadeTipo,
} from '@/services/contatos'
import { StudioLogo, getWhatsAppLink } from '@/components/StudioLogo'
import { useToast } from '@/hooks/use-toast'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { useNoIndex } from '@/hooks/use-no-index'

export const PainelContatos: React.FC = () => {
  useNoIndex()
  const navigate = useNavigate()
  const { toast } = useToast()

  const [contatos, setContatos] = useState<ContatoRecord[]>([])
  const [carregando, setCarregando] = useState(true)
  const [filtroStatus, setFiltroStatus] = useState<string>('todos')
  const [busca, setBusca] = useState<string>('')

  // Estado para exclusão com confirmação
  const [contatoParaExcluir, setContatoParaExcluir] = useState<ContatoRecord | null>(null)
  const [excluindo, setExcluindo] = useState(false)

  // Estado para modal de inserção rápida
  const [modalNovoAberto, setModalNovoAberto] = useState(false)
  const [novoNome, setNovoNome] = useState('')
  const [novoContato, setNovoContato] = useState('')
  const [novaNecessidade, setNovaNecessidade] = useState<NecessidadeTipo>('Aula Experimental')
  const [salvandoNovo, setSalvandoNovo] = useState(false)

  // 1. Verificação de autenticação
  useEffect(() => {
    if (!pb.authStore.isValid) {
      navigate('/painel/login', { replace: true })
    }
  }, [navigate])

  // 2. Carregar contatos
  const carregarDados = useCallback(async () => {
    try {
      const data = await listarContatos()
      setContatos(data)
    } catch (err) {
      console.error('Erro ao carregar contatos:', err)
      toast({
        title: 'Erro ao carregar contatos',
        description: 'Verifique se você está autenticado.',
        variant: 'destructive',
      })
    } finally {
      setCarregando(false)
    }
  }, [toast])

  useEffect(() => {
    if (pb.authStore.isValid) {
      carregarDados()
    }
  }, [carregarDados])

  // 3. Realtime SSE: atualiza lista quando qualquer contato for criado, alterado ou excluído
  useRealtime<ContatoRecord>(
    'contatos',
    (e) => {
      if (e.action === 'create') {
        setContatos((prev) => [e.record, ...prev.filter((c) => c.id !== e.record.id)])
        toast({
          title: 'Novo contato recebido!',
          description: `${e.record.nome} enviou uma mensagem para ${e.record.necessidade}.`,
          className: 'bg-[#2E7D32] text-white border-none',
        })
      } else if (e.action === 'update') {
        setContatos((prev) => prev.map((c) => (c.id === e.record.id ? e.record : c)))
      } else if (e.action === 'delete') {
        setContatos((prev) => prev.filter((c) => c.id !== e.record.id))
      }
    },
    pb.authStore.isValid,
  )

  // 4. Logout
  const handleLogout = () => {
    pb.authStore.clear()
    navigate('/painel/login', { replace: true })
  }

  // 5. Alterar Status
  const handleStatusChange = async (contatoId: string, novoStatus: StatusContato) => {
    // Atualização otimista
    setContatos((prev) => prev.map((c) => (c.id === contatoId ? { ...c, status: novoStatus } : c)))

    try {
      await atualizarStatusContato(contatoId, novoStatus)
      toast({
        title: 'Status atualizado',
        description: `Status alterado para "${novoStatus}".`,
      })
    } catch (err) {
      console.error('Erro ao atualizar status:', err)
      toast({
        title: 'Erro ao atualizar',
        description: 'Não foi possível salvar o novo status.',
        variant: 'destructive',
      })
      carregarDados()
    }
  }

  // 6. Excluir contato
  const handleConfirmarExclusao = async () => {
    if (!contatoParaExcluir) return
    setExcluindo(true)
    try {
      await excluirContato(contatoParaExcluir.id)
      setContatos((prev) => prev.filter((c) => c.id !== contatoParaExcluir.id))
      toast({
        title: 'Contato excluído',
        description: `O registro de ${contatoParaExcluir.nome} foi removido.`,
      })
      setContatoParaExcluir(null)
    } catch (err) {
      console.error('Erro ao excluir:', err)
      toast({
        title: 'Erro ao excluir contato',
        description: 'Tente novamente.',
        variant: 'destructive',
      })
    } finally {
      setExcluindo(false)
    }
  }

  // 7. Criar novo contato direto no painel
  const handleCriarNovo = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!novoNome.trim() || !novoContato.trim()) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Preencha o nome e o contato.',
        variant: 'destructive',
      })
      return
    }

    setSalvandoNovo(true)
    try {
      const criado = await criarContato({
        nome: novoNome.trim(),
        contato: novoContato.trim(),
        necessidade: novaNecessidade,
        status: 'Novo',
      })
      setContatos((prev) => [criado, ...prev.filter((c) => c.id !== criado.id)])
      setModalNovoAberto(false)
      setNovoNome('')
      setNovoContato('')
      setNovaNecessidade('Aula Experimental')
      toast({
        title: 'Contato adicionado!',
        description: 'Novo contato inserido com sucesso.',
        className: 'bg-[#2E7D32] text-white border-none',
      })
    } catch (err) {
      console.error('Erro ao criar contato:', err)
      toast({
        title: 'Erro ao criar',
        description: 'Não foi possível salvar.',
        variant: 'destructive',
      })
    } finally {
      setSalvandoNovo(false)
    }
  }

  // 8. Filtragem e contadores em memória
  const contatosFiltrados = useMemo(() => {
    return contatos.filter((c) => {
      const matchStatus = filtroStatus === 'todos' || c.status === filtroStatus
      const matchBusca =
        !busca.trim() ||
        c.nome.toLowerCase().includes(busca.toLowerCase()) ||
        c.contato.toLowerCase().includes(busca.toLowerCase()) ||
        c.necessidade.toLowerCase().includes(busca.toLowerCase())
      return matchStatus && matchBusca
    })
  }, [contatos, filtroStatus, busca])

  const contagemNovos = useMemo(
    () => contatos.filter((c) => c.status === 'Novo').length,
    [contatos],
  )
  const contagemEmContato = useMemo(
    () => contatos.filter((c) => c.status === 'Em contato').length,
    [contatos],
  )
  const contagemConvertidos = useMemo(
    () => contatos.filter((c) => c.status === 'Convertido').length,
    [contatos],
  )
  const contagemArquivados = useMemo(
    () => contatos.filter((c) => c.status === 'Arquivado').length,
    [contatos],
  )

  const formatarData = (dataStr: string) => {
    try {
      const d = new Date(dataStr)
      return d.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    } catch {
      return dataStr
    }
  }

  // Render do Badge com micro-pulso para "Novo"
  const renderBadgeStatus = (status: StatusContato) => {
    switch (status) {
      case 'Novo':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-bold bg-[#EAF2EF] text-[#2E5E4E] border border-[#7FAF9C]/60">
            <span className="w-2 h-2 rounded-full bg-[#2E5E4E] animate-pulse-subtle" />
            Novo
          </span>
        )
      case 'Em contato':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-bold bg-[#FFF9C4] text-[#F57F17] border border-[#FFEE58]">
            <Clock className="w-3 h-3" />
            Em contato
          </span>
        )
      case 'Convertido':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-bold bg-[#2E5E4E] text-white shadow-xs">
            <CheckCircle className="w-3 h-3" />
            Convertido
          </span>
        )
      case 'Arquivado':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
            <Archive className="w-3 h-3" />
            Arquivado
          </span>
        )
      default:
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
            {status}
          </span>
        )
    }
  }

  return (
    <div className="min-h-screen bg-[#F4F8F6] text-[#1F3D33]">
      {/* Topbar do Painel */}
      <header className="bg-white border-b border-[#7FAF9C]/30 sticky top-0 z-30 shadow-xs">
        <div className="container mx-auto max-w-7xl px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" title="Ir para a página inicial" className="hover:opacity-90">
              <StudioLogo />
            </Link>
            <div className="hidden sm:block h-6 w-px bg-gray-200" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#2E5E4E] bg-[#EAF2EF] px-2.5 py-1 rounded-full">
                Painel da Drica
              </span>
              <span className="text-xs text-[#7FAF9C] font-medium">Gestão de Contatos</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalNovoAberto(true)}
              className="inline-flex items-center gap-1.5 bg-[#2E5E4E] hover:bg-[#1F3D33] text-white px-3.5 py-2 rounded-full text-xs font-heading font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Novo Contato</span>
            </button>

            <Link
              to="/"
              className="hidden md:inline-flex items-center gap-1 text-xs font-heading text-[#2E5E4E] hover:text-[#1F3D33] px-3 py-2 rounded-full hover:bg-[#EAF2EF]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Ver Site</span>
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-2 rounded-full font-semibold transition-colors"
              title="Sair do painel"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal do Painel */}
      <main className="container mx-auto max-w-7xl px-4 py-8">
        {/* Cabeçalho da página com Estatísticas */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#1F3D33]">
                Contatos recebidos
              </h1>
              <p className="text-sm text-[#2E5E4E] mt-1">
                Acompanhe quem quer conhecer a base e transforme interessados em novos alunos.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={carregarDados}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-[#7FAF9C]/40 hover:bg-[#EAF2EF] text-xs font-heading font-semibold text-[#2E5E4E] transition-colors shadow-xs cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${carregando ? 'animate-spin' : ''}`} />
                <span>Atualizar</span>
              </button>
            </div>
          </div>

          {/* Cards de Métricas de Status */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <button
              onClick={() => setFiltroStatus(filtroStatus === 'Novo' ? 'todos' : 'Novo')}
              className={`p-4 rounded-2xl border text-left transition-all ${
                filtroStatus === 'Novo'
                  ? 'bg-[#C8E6C9] border-[#2E7D32] shadow-sm'
                  : 'bg-white border-[#C8E6C9]/60 hover:border-[#81C784]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#1B3A1B]/70">Novos</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E7D32] animate-pulse-subtle" />
              </div>
              <div className="font-heading font-bold text-2xl sm:text-3xl text-[#2E5E4E] mt-1">
                {contagemNovos}
              </div>
              <p className="text-[11px] text-[#7FAF9C]">Aguardando primeiro contato</p>
            </button>

            <button
              onClick={() =>
                setFiltroStatus(filtroStatus === 'Em contato' ? 'todos' : 'Em contato')
              }
              className={`p-4 rounded-2xl border text-left transition-all ${
                filtroStatus === 'Em contato'
                  ? 'bg-[#FFF9C4] border-[#F57F17] shadow-sm'
                  : 'bg-white border-[#7FAF9C]/30 hover:border-[#7FAF9C]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#1F3D33]/70">Em contato</span>
                <Clock className="w-4 h-4 text-[#F57F17]" />
              </div>
              <div className="font-heading font-bold text-2xl sm:text-3xl text-[#F57F17] mt-1">
                {contagemEmContato}
              </div>
              <p className="text-[11px] text-[#7FAF9C]">Conversando no WhatsApp</p>
            </button>

            <button
              onClick={() =>
                setFiltroStatus(filtroStatus === 'Convertido' ? 'todos' : 'Convertido')
              }
              className={`p-4 rounded-2xl border text-left transition-all ${
                filtroStatus === 'Convertido'
                  ? 'bg-[#EAF2EF] border-[#2E5E4E] shadow-sm'
                  : 'bg-white border-[#7FAF9C]/30 hover:border-[#7FAF9C]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#1F3D33]/70">Convertidos</span>
                <UserCheck className="w-4 h-4 text-[#2E5E4E]" />
              </div>
              <div className="font-heading font-bold text-2xl sm:text-3xl text-[#2E5E4E] mt-1">
                {contagemConvertidos}
              </div>
              <p className="text-[11px] text-[#7FAF9C]">Matriculados no estúdio</p>
            </button>

            <button
              onClick={() => setFiltroStatus(filtroStatus === 'Arquivado' ? 'todos' : 'Arquivado')}
              className={`p-4 rounded-2xl border text-left transition-all ${
                filtroStatus === 'Arquivado'
                  ? 'bg-gray-100 border-gray-400 shadow-sm'
                  : 'bg-white border-[#7FAF9C]/30 hover:border-[#7FAF9C]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#1F3D33]/70">Arquivados</span>
                <Archive className="w-4 h-4 text-gray-500" />
              </div>
              <div className="font-heading font-bold text-2xl sm:text-3xl text-gray-700 mt-1">
                {contagemArquivados}
              </div>
              <p className="text-[11px] text-[#7FAF9C]">Finalizados / Sem interesse</p>
            </button>
          </div>
        </div>

        {/* Barra de Filtro e Busca */}
        <div className="bg-white p-4 rounded-2xl border border-[#C8E6C9] shadow-xs mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Busca por nome ou contato */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#4A7C59] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar por nome, contato ou modalidade..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F4F9F4] border border-[#C8E6C9] text-xs sm:text-sm text-[#1B3A1B] focus:outline-none focus:ring-2 focus:ring-[#81C784]/40"
            />
          </div>

          {/* Filtro por status tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {['todos', 'Novo', 'Em contato', 'Convertido', 'Arquivado'].map((st) => (
              <button
                key={st}
                onClick={() => setFiltroStatus(st)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  filtroStatus === st
                    ? 'bg-[#2E7D32] text-white shadow-xs'
                    : 'bg-[#F4F9F4] text-[#1B3A1B] hover:bg-[#E8F5E9]'
                }`}
              >
                {st === 'todos' ? 'Todos os contatos' : st}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Contatos */}
        {carregando ? (
          <div className="bg-white rounded-[24px] p-12 text-center border border-[#C8E6C9] flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-8 h-8 text-[#2E7D32] animate-spin" />
            <p className="text-sm font-semibold text-[#1B3A1B]">Carregando contatos recebidos...</p>
          </div>
        ) : contatosFiltrados.length === 0 ? (
          <div className="bg-white rounded-[24px] p-12 text-center border border-[#C8E6C9] flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32]">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#1F3D33]">
              Nenhum contato encontrado
            </h3>
            <p className="text-xs text-[#4A7C59] max-w-sm">
              {busca || filtroStatus !== 'todos'
                ? 'Tente ajustar os filtros ou termo de busca acima.'
                : 'Ainda não foram registrados contatos. Use o formulário na página inicial ou o botão Novo Contato acima!'}
            </p>
            {(busca || filtroStatus !== 'todos') && (
              <button
                onClick={() => {
                  setBusca('')
                  setFiltroStatus('todos')
                }}
                className="text-xs font-bold text-[#2E7D32] hover:underline uppercase mt-1"
              >
                Limpar filtros
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {/* Visualização Desktop (Tabela Rica) */}
            <div className="hidden lg:block bg-white rounded-[24px] border border-[#C8E6C9] overflow-hidden shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#E8F5E9]/60 border-b border-[#C8E6C9] text-[11px] font-bold uppercase tracking-wider text-[#1B3A1B]/80">
                    <th className="py-3.5 px-5">Nome</th>
                    <th className="py-3.5 px-5">Contato</th>
                    <th className="py-3.5 px-5">Necessidade</th>
                    <th className="py-3.5 px-5">Data de Recebimento</th>
                    <th className="py-3.5 px-5">Status Atual</th>
                    <th className="py-3.5 px-5 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {contatosFiltrados.map((contato) => {
                    const whatsLink = getWhatsAppLink(
                      `Olá, ${contato.nome}! Aqui é a Drica do BASE 6 STUDIO. Vi que você tem interesse em ${contato.necessidade}. Como posso te ajudar?`,
                    )

                    return (
                      <tr
                        key={contato.id}
                        className="hover:bg-[#F4F9F4]/70 transition-colors group"
                      >
                        <td className="py-4 px-5">
                          <div className="font-semibold text-[#1B3A1B]">{contato.nome}</div>
                          <div className="text-[11px] text-[#4A7C59] font-mono">
                            ID: {contato.id}
                          </div>
                        </td>

                        <td className="py-4 px-5">
                          <div className="flex items-center gap-2">
                            <span className="text-[#1B3A1B] font-medium">{contato.contato}</span>
                            <a
                              href={whatsLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Chamar no WhatsApp"
                              className="text-[#2E7D32] hover:text-[#25D366] transition-colors p-1 rounded-full hover:bg-[#E8F5E9]"
                            >
                              <Phone className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </td>

                        <td className="py-4 px-5">
                          <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9]">
                            {contato.necessidade}
                          </span>
                        </td>

                        <td className="py-4 px-5 text-xs text-[#1B3A1B]/80">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#4A7C59]" />
                            <span>{formatarData(contato.created)}</span>
                          </div>
                        </td>

                        <td className="py-4 px-5">{renderBadgeStatus(contato.status)}</td>

                        <td className="py-4 px-5 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {/* Dropdown / Select de Mudança de Status */}
                            <select
                              value={contato.status}
                              onChange={(e) =>
                                handleStatusChange(contato.id, e.target.value as StatusContato)
                              }
                              className="text-xs px-2.5 py-1.5 rounded-xl border border-[#C8E6C9] bg-white text-[#1B3A1B] font-medium focus:outline-none focus:ring-2 focus:ring-[#81C784]"
                            >
                              <option value="Novo">Novo</option>
                              <option value="Em contato">Em contato</option>
                              <option value="Convertido">Convertido</option>
                              <option value="Arquivado">Arquivado</option>
                            </select>

                            {/* Botão Excluir */}
                            <button
                              onClick={() => setContatoParaExcluir(contato)}
                              title="Excluir contato"
                              className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* Visualização Mobile / Tablet (Cards Empilhados) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4">
              {contatosFiltrados.map((contato) => {
                const whatsLink = getWhatsAppLink(
                  `Olá, ${contato.nome}! Aqui é a Drica do BASE 6 STUDIO. Vi seu contato pelo nosso site!`,
                )

                return (
                  <div
                    key={contato.id}
                    className="bg-white rounded-[24px] p-5 border border-[#C8E6C9] shadow-xs flex flex-col justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-semibold text-base text-[#1B3A1B]">{contato.nome}</h3>
                          <p className="text-xs text-[#4A7C59] mt-0.5">{contato.contato}</p>
                        </div>
                        <div>{renderBadgeStatus(contato.status)}</div>
                      </div>

                      <div className="flex items-center gap-2 mt-3">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#E8F5E9] text-[#2E7D32]">
                          {contato.necessidade}
                        </span>
                        <span className="text-[11px] text-[#4A7C59] flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatarData(contato.created)}
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <a
                          href={whatsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 text-xs font-semibold transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>

                        <select
                          value={contato.status}
                          onChange={(e) =>
                            handleStatusChange(contato.id, e.target.value as StatusContato)
                          }
                          className="text-xs px-2 py-1 rounded-lg border border-[#C8E6C9] bg-white text-[#1B3A1B]"
                        >
                          <option value="Novo">Novo</option>
                          <option value="Em contato">Em contato</option>
                          <option value="Convertido">Convertido</option>
                          <option value="Arquivado">Arquivado</option>
                        </select>
                      </div>

                      <button
                        onClick={() => setContatoParaExcluir(contato)}
                        className="p-1.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50"
                        title="Excluir"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </main>

      {/* Modal de Confirmação de Exclusão */}
      <Dialog
        open={!!contatoParaExcluir}
        onOpenChange={(aberto) => !aberto && setContatoParaExcluir(null)}
      >
        <DialogContent className="rounded-3xl max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading font-bold text-xl text-[#1F3D33]">
              Excluir Contato
            </DialogTitle>
            <DialogDescription className="text-sm text-[#7FAF9C] pt-2">
              Tem certeza que deseja excluir o contato de{' '}
              <strong className="text-[#1F3D33]">{contatoParaExcluir?.nome}</strong>? Esta ação não
              poderá ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 flex gap-2">
            <button
              onClick={() => setContatoParaExcluir(null)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100"
            >
              Cancelar
            </button>
            <button
              onClick={handleConfirmarExclusao}
              disabled={excluindo}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
            >
              {excluindo ? 'Excluindo...' : 'Sim, excluir'}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal de Adicionar Novo Contato Manualmente */}
      <Dialog open={modalNovoAberto} onOpenChange={setModalNovoAberto}>
        <DialogContent className="rounded-3xl max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading font-bold text-xl text-[#1F3D33]">
              Novo Contato
            </DialogTitle>
            <DialogDescription className="text-sm text-[#7FAF9C]">
              Cadastre manualmente uma pessoa que fez contato por telefone ou pessoalmente no
              estúdio.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleCriarNovo} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-[#1B3A1B] uppercase tracking-wider mb-1">
                Nome
              </label>
              <input
                type="text"
                required
                placeholder="Nome do cliente"
                value={novoNome}
                onChange={(e) => setNovoNome(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#C8E6C9] focus:border-[#2E7D32] text-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1B3A1B] uppercase tracking-wider mb-1">
                Contato (WhatsApp / E-mail)
              </label>
              <input
                type="text"
                required
                placeholder="(21) 99999-9999"
                value={novoContato}
                onChange={(e) => setNovoContato(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#C8E6C9] focus:border-[#2E7D32] text-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1B3A1B] uppercase tracking-wider mb-1">
                O que precisa?
              </label>
              <select
                value={novaNecessidade}
                onChange={(e) => setNovaNecessidade(e.target.value as NecessidadeTipo)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#C8E6C9] focus:border-[#2E7D32] text-sm focus:outline-none"
              >
                <option value="Pilates Contemporâneo">Pilates Contemporâneo</option>
                <option value="Pilates Clínico">Pilates Clínico</option>
                <option value="Pilates">Pilates</option>
                <option value="Condicionamento">Condicionamento</option>
                <option value="Fisioterapia">Fisioterapia</option>
                <option value="Plataforma Vibratória">Plataforma Vibratória</option>
                <option value="Avaliação Física">Avaliação Física</option>
                <option value="Aula Experimental">Aula Experimental</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <DialogFooter className="mt-4 pt-2">
              <button
                type="button"
                onClick={() => setModalNovoAberto(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={salvandoNovo}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-[#2E7D32] text-white hover:bg-[#256629] disabled:opacity-50"
              >
                {salvandoNovo ? 'Salvando...' : 'Salvar Contato'}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default PainelContatos
