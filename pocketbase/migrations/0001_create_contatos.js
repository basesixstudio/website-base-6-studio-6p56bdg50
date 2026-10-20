migrate(
  (app) => {
    const collection = new Collection({
      name: 'contatos',
      type: 'base',
      listRule: "@request.auth.id != ''",
      viewRule: "@request.auth.id != ''",
      createRule: '',
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'nome', type: 'text', required: true },
        { name: 'contato', type: 'text', required: true },
        {
          name: 'necessidade',
          type: 'select',
          required: true,
          values: [
            'Pilates',
            'Condicionamento',
            'Fisioterapia',
            'Plataforma Vibratória',
            'Avaliação Física',
            'Aula Experimental',
            'Outro',
          ],
          maxSelect: 1,
        },
        {
          name: 'status',
          type: 'select',
          required: false,
          values: ['Novo', 'Em contato', 'Convertido', 'Arquivado'],
          maxSelect: 1,
        },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: [
        'CREATE INDEX idx_contatos_status ON contatos (status)',
        'CREATE INDEX idx_contatos_created ON contatos (created)',
      ],
    })

    app.save(collection)
  },
  (app) => {
    try {
      const collection = app.findCollectionByNameOrId('contatos')
      app.delete(collection)
    } catch (_) {}
  },
)
