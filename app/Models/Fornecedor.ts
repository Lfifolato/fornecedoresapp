import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Fornecedores extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome:string

  @column()
  public email:string

  @column()
  public setor:string

  @column()
  public descricao:string

  @column()
  public ativo: Boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
