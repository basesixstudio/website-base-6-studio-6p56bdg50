// pb_hook para responder à rota RFC 9116 /.well-known/security.txt
// Garante que o arquivo seja servido em text/plain; charset=utf-8 com status 200 diretamente pelo backend

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
