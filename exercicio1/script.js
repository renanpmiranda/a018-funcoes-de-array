const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const transformaEmCaixaAlta = (objeto) => {
    for(let propriedade in objeto){
        console.log(objeto[propriedade].toUpperCase())
    }
}

transformaEmCaixaAlta(objeto)

const retornaComoTextoCorrido = (objeto) => {
    const array = []
    for(let propriedade in objeto){
        array.push(objeto[propriedade])
    }
    return array.join()
}

console.log(retornaComoTextoCorrido(objeto))

const funcaoJuncao = (funcao1, funcao2) => {
    for(let propriedade in objeto){
        console.log(objeto[propriedade].toUpperCase())
    }
    let resultadoFinal = funcao2(funcao1)
    return resultadoFinal
}

console.log(funcaoJuncao(transformaEmCaixaAlta,retornaComoTextoCorrido))