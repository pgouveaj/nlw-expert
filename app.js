let perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const"
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "addToEnd()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "console.log()",
        "print()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "object",
        "array",
        "string"
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos seguintes operadores é usado para comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!="
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para converter uma string em minúsculas em JavaScript?",
      respostas: [
        "toLowerCase()",
        "toLower()",
        "lowerCase()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes loops é usado em JavaScript para iterar sobre propriedades de um objeto?",
      respostas: [
        "for loop",
        "while loop",
        "for...in loop"
      ],
      correta: 2
    },
    {
      pergunta: "Qual símbolo é usado para comentários de uma única linha em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "<!-- -->"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para encontrar o tamanho de um array em JavaScript?",
      respostas: [
        "size()",
        "length()",
        "count()"
      ],
      correta: 1
    }
  ];
  let quiz = document.querySelector('#quiz')
  let template = document.querySelector('template')
  
  let corretas = new Set()
  let totalDePerguntas = perguntas.length
  let mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop
  for(let item of perguntas) {
    let quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  //
    for(let resposta of item.respostas) {
      let dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        let estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    //remove o dt
  quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  module.exports = perguntas;