/*
Tipos de Dados    
1. String -> Texto.
2. Numbers -> Números
3. Boolean -> Boleano  usado para diser se é true ou false (verdadeiro ou falso)
4. Object -> Objeto 
5. Null & Undefined  

Estrutura de Dados

1. Array

*/
                //String

    const texto1 = "texto com aspas duplas"
    const texto2 = 'texto com aspas simples' //usar se quiser colocar uma palavra em ""
    const texto3 = `texto com as crase que são acento pro lado esqeurdo` // Template Literals ou Template String é como se chama esss `` aqui no JavaScript
    // `` quando uso as crase posso pular linha
    //Não posso colocar nome de uma variável começando com número. por exemplo 1texto
    //Não posso colocar o mesmo nome para outra variável mesmo uma sento let e outra const

    console.log(texto1)
    console.log(texto2)
    console.log(texto3)

    //console.log() -> Serve somente para testar se esta tudo ok
    // Ctrl + alt + n  -> abre o terminal para ver se funcionou 
   
                //Numbers

    const numero1 = 30
    const numero2 = 10.5 //Posso usar numeros quebrados separados por ponto e nao pode usar virgula

                //Object

    //Dessa forma posso chamar todas as infomrações , colocando a variavel dados 
    //Fica mais facil para guardar muitas informações que depois preciso ver tudo de uma vez
    //Posso colocar outro objeto dentro do meu objeto. Assim como fiz em endereço para poder organizar melhor meu código
    
    let dados = {
        nome: "Charlles",
        idade: 29,
        endereco: { 
            rua: "Dos Bobos",
            numero: 0,
            cidade: "São Paulo"
        }
    }
                
    console.log(dados)
    console.log(dados.nome) //Dessa fomra eu navego dentro do meu objeto e só pego a informação de nome igual o exemplo
    console.log(dados.endereco.cidade)// uzando o ponto . posso ir navegando cada vez mais fundo no meu objeto para pegar informações            

    dados.idade = 30 // Dessa forma consigo alterar alguma variavel.
    
    console.log(dados.idade)

                //Null & Undefined

    const usuario = {
        nome: "Charlles",
        idade:29,
        nomeDoConjuge: "Bianca",
        id: null
    }

    // Null quando eu nao quero que tenha informações naquele campo. Nesse exemplo posso colocar o id depois quando o usuario tiver
    // Underfined é quando eu procuro uma informação que não tem.
    console.log(usuario.endereco) // Nesse exemplo nao ire encontrar o enderco pq nao tem essa informação no meu código e vai dar erro undefined

                //Array

    // Uso [] e coloco minhas informações dentro. É como se fosse uma caixa para guardar varias informações
    //coloco meus objetos dentro e não preciso ficar criando varias variaveis de usuario

    const usuario2 = [
    {
        nome: "Bianca",
        idade:29,
        nomeDoConjuge: "Charlles",
        id: null
    },
    {
        nome: "Charlles",
        idade:29,
        nomeDoConjuge: "Bianca",
        id: null
    }
    ]

    console.log(usuario2)

    let usuario3 = [20, 30, 100]

    console.log(usuario3[2]) // Dessa forma irá aparecer o que esta na posição 2 que será o 100 
                            //A contagem de posição começa com zero e por isso o 100 está na posição 2

    usuario3[1] = 55 //Dessa forma altero o que esta na posição 1

    //Esse é um exemplo de objeto dentro do meu array e posso acesar usando a posição
    const users = [
        {name: 'Charllesss', age: 29},
        {name: 'Biancaaa', age:29},
    ]

    console.log(users[1].age) //Biancaaa que está na posição 1 e ira mostrar somete a idade
