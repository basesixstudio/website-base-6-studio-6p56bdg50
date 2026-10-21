migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('contatos')
    const necessidadeField = col.fields.getByName('necessidade')

    if (necessidadeField) {
      necessidadeField.values = [
        'Pilates',
        'Pilates Contemporâneo',
        'Pilates Clínico',
        'Condicionamento',
        'Fisioterapia',
        'Plataforma Vibratória',
        'Avaliação Física',
        'Aula Experimental',
        'Outro',
      ]
      necessidadeField.maxSelect = 1
      app.save(col)
    }
  },
  (app) => {
    const col = app.findCollectionByNameOrId('contatos')
    const necessidadeField = col.fields.getByName('necessidade')

    if (necessidadeField) {
      necessidadeField.values = [
        'Pilates',
        'Condicionamento',
        'Fisioterapia',
        'Plataforma Vibratória',
        'Avaliação Física',
        'Aula Experimental',
        'Outro',
      ]
      necessidadeField.maxSelect = 1
      app.save(col)
    }
  },
)
