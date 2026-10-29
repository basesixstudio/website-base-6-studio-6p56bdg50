// Hook PocketBase para validação e sanitização estrita da coleção contatos
onRecordCreate((e) => {
  // Apenas processa se for a coleção contatos
  if (e.collection.name !== 'contatos') {
    e.next()
    return
  }

  const record = e.record
  let nome = record.getString('nome') || ''
  let contato = record.getString('contato') || ''
  let status = record.getString('status') || 'Novo'

  // Remover tags HTML e scripts maliciosos
  nome = nome.replace(/<[^>]*>?/gm, '').trim()
  contato = contato.replace(/<[^>]*>?/gm, '').trim()

  // Limites de tamanho
  if (nome.length > 120) {
    nome = nome.substring(0, 120)
  }
  if (contato.length > 120) {
    contato = contato.substring(0, 120)
  }

  if (nome.length < 2) {
    throw new BadRequestError('Nome muito curto (mínimo de 2 caracteres).')
  }

  if (contato.length < 5) {
    throw new BadRequestError('Contato muito curto (mínimo de 5 caracteres).')
  }

  // Sanitizar caracteres de controle invisíveis
  nome = nome
    .replace(/[\x00-\x1F\x7F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  contato = contato
    .replace(/[\x00-\x1F\x7F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  // Se o usuário não estiver autenticado como admin/user, forçar status 'Novo'
  const authRecord = e.auth
  if (!authRecord || !authRecord.id) {
    status = 'Novo'
  }

  record.set('nome', nome)
  record.set('contato', contato)
  record.set('status', status)

  e.next()
}, 'contatos')

// Rota pública RFC 9116 /.well-known/security.txt
// Servida diretamente pelo backend em text/plain; charset=utf-8
routerAdd('GET', '/.well-known/security.txt', (e) => {
  const content = [
    'Contact: mailto:basesixstudio@gmail.com',
    'Expires: 2027-12-31T23:59:59.000Z',
    'Preferred-Languages: pt-BR, pt, en',
    'Canonical: https://www.base6studio.com.br/.well-known/security.txt',
    'Policy: https://www.base6studio.com.br/',
    'Acknowledgments: https://www.base6studio.com.br/',
  ].join('\n')

  e.response.header().set('Content-Type', 'text/plain; charset=utf-8')
  e.response.header().set('Cache-Control', 'public, max-age=3600')
  return e.string(200, content)
})
