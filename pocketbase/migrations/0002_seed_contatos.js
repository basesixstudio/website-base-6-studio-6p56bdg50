migrate(
  (app) => {
    // 1. Seed admin user in _pb_users_auth_ if not exists
    const users = app.findCollectionByNameOrId('_pb_users_auth_')
    try {
      app.findAuthRecordByEmail('_pb_users_auth_', 'basesixstudio@gmail.com')
    } catch (_) {
      const adminRecord = new Record(users)
      adminRecord.setEmail('basesixstudio@gmail.com')
      adminRecord.setPassword('Skip@Pass')
      adminRecord.setVerified(true)
      adminRecord.set('name', 'Drica — Base 6 Studio')
      app.save(adminRecord)
    }

    // 2. Seed initial demo contatos in contatos collection
    const contatosCol = app.findCollectionByNameOrId('contatos')
    const seedContatos = [
      {
        nome: 'Juliana Mendes',
        contato: '(21) 98765-4321',
        necessidade: 'Aula Experimental',
        status: 'Novo',
      },
      {
        nome: 'Rodrigo Carvalho',
        contato: '(21) 99123-4567',
        necessidade: 'Fisioterapia',
        status: 'Em contato',
      },
      {
        nome: 'Beatriz Nogueira',
        contato: 'beatriz.nogueira@email.com',
        necessidade: 'Pilates',
        status: 'Convertido',
      },
      {
        nome: 'Marcelo Silveira',
        contato: '(21) 97654-3210',
        necessidade: 'Plataforma Vibratória',
        status: 'Novo',
      },
    ]

    for (let i = 0; i < seedContatos.length; i++) {
      const item = seedContatos[i]
      try {
        app.findFirstRecordByFilter('contatos', `nome = '${item.nome}'`)
      } catch (_) {
        const record = new Record(contatosCol)
        record.set('nome', item.nome)
        record.set('contato', item.contato)
        record.set('necessidade', item.necessidade)
        record.set('status', item.status)
        app.save(record)
      }
    }
  },
  (app) => {
    // Down migration
    try {
      const records = app.findRecordsByFilter('contatos', "nome != ''", '', 100, 0)
      for (let i = 0; i < records.length; i++) {
        try {
          app.delete(records[i])
        } catch (_) {}
      }
    } catch (_) {}
  },
)
