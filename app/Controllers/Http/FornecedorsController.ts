import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Fornecedor from 'App/Models/Fornecedor'

export default class FornecedorsController {

  public async index ({response}: HttpContextContract) {

    const forne = await Fornecedor.all()

    return response.status(200).json({data: forne})

  }

  public async store ({request, response}: HttpContextContract) {

    const {nome ,
          email,
          setor,
          descricao,
          ativo} = request.only(['nome', 'email', 'setor', 'descricao', 'ativo'])


    if(!email){
    return response.status(400).json({error: 'E-mail  Obrigatorio'})
    }

    const validarEmail = await Fornecedor.findBy("email", email)

    if(validarEmail){
      return response.status(400).json({error: 'E-mail  Ja cadastrado'})
    }

    const fornecedores = await Fornecedor.create({
      nome, email, setor, descricao, ativo
    })

    return response.status(201).json({data: fornecedores})

  }

  public async show ({params, response}: HttpContextContract) {


    const fornecedores = await Fornecedor.findOrFail(params.id)



    return response.status(200).json({data: fornecedores})

  }


  public async update ({request, params, response}: HttpContextContract) {

      const fornecedores = await Fornecedor.findOrFail(params.id)

      const {nome ,
      email,
      setor,
      descricao,
      ativo} = request.only(['nome', 'email', 'setor', 'descricao', 'ativo'])

      const validarEmail = await Fornecedor.findBy("email", email)

      if(validarEmail == email){
        fornecedores.merge({nome, email, setor, descricao, ativo})
        await fornecedores.save()
      }

      return response.status(200).json({massage: "Fornecedor Atualizado"})


  }

  public async destroy ({params, response}: HttpContextContract) {

    const fornecedores = await Fornecedor.findOrFail(params.id)

    await fornecedores.delete()

    return response.status(200).json({massage: "Fornecedor Deletado com Sucesso"})
  }
}
