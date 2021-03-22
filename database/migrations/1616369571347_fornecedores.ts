import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Fornecedores extends BaseSchema {
  protected tableName = 'fornecedores'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome')
      table.string('email')
      table.string('setor')
      table.text('descricao', 'longtext')
      table.boolean('ativo').defaultTo(true)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
