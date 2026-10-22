migrate(
  (app) => {
    // 1. Reforçar regras da coleção contatos:
    // createRule: qualquer um pode criar, mas apenas com status inicial 'Novo' ou vazio (não pode criar já 'Convertido')
    // list/view/update/delete: estritamente restrito a usuários autenticados
    const contatosCol = app.findCollectionByNameOrId('contatos')
    contatosCol.listRule = "@request.auth.id != ''"
    contatosCol.viewRule = "@request.auth.id != ''"
    contatosCol.createRule = "@request.body.status:changed = false || @request.body.status = 'Novo'"
    contatosCol.updateRule = "@request.auth.id != ''"
    contatosCol.deleteRule = "@request.auth.id != ''"
    app.save(contatosCol)

    // 2. Fechar registro público de novas contas de usuário (users) se aplicável:
    // Apenas admins/usuários autenticados podem criar outros usuários
    const usersCol = app.findCollectionByNameOrId('_pb_users_auth_')
    usersCol.createRule = "@request.auth.id != ''"
    app.save(usersCol)
  },
  (app) => {
    try {
      const contatosCol = app.findCollectionByNameOrId('contatos')
      contatosCol.createRule = ''
      app.save(contatosCol)
    } catch (_) {}

    try {
      const usersCol = app.findCollectionByNameOrId('_pb_users_auth_')
      usersCol.createRule = ''
      app.save(usersCol)
    } catch (_) {}
  },
)
