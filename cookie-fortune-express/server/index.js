const express = require('express')
const cors = require('cors')
const app = express()
const port = 3003

app.use(cors())

app.use(express.json())

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`)
})

const lista = [
  {
    keywords: 'Item1',
    message: 'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    category: 'tempo'
  },
  {
    keywords: 'Item2',
    message: 'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    category: 'superação'
  },
  {
    keywords: 'Item3',
    message:
      'Há três coisas que jamais voltam a flecha lançada, a palavra dita e a oportunidade perdida',
    category: 'tempo'
  },
  {
    keywords: 'Item 4',
    message:
      'A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.',
    category: 'superação'
  },
  {
    keywords: 'Item 5',
    message: 'Se você se sente só é porque construiu muros ao invés de pontes.',
    category: 'sentimento'
  },
  {
    keywords: 'Item 6',
    message: 'O bom-senso vale mais do que muito conhecimento.',
    category: 'superação'
  },
  {
    keywords: 'Item 7',
    message: 'Aquele que se importa com o sentimento dos outros, não é um tolo.',
    category: 'sentimento'
  },
  {
    keywords: 'Item 8',
    message: 'A adversidade é um espelho que reflete o verdadeiro eu.',
    category: 'superação'
  },
  {
    keywords: 'Item 9',
    message: 'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
    category: 'sentimento'
  },
  {
    keywords: 'Item 10',
    message: 'O riso é a menor distância entre duas pessoas.',
    category: 'sentimento'
  },
  {
    keywords: 'Item 11',
    message: 'Os defeitos são mais fortes quando o amor é fraco.',
    category: 'sentimento'
  },
  {
    keywords: 'Item 12',
    message: 'Amizade e Amor são coisas que se unem num piscar de olhos.',
    category: 'sentimento'
  },
  {
    keywords: 'Item 13',
    message:
      'As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.',
    category: 'sentimento'
  },
  {
    keywords: 'Item 14',
    message: 'Todas as coisas são difíceis antes de se tornarem fáceis.',
    category: 'superação'
  },
  {
    keywords: 'Item 15',
    message: 'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    category: 'superação'
  }
]

// endpoint apenas testando a conexão c o servidor
app.get('/', (request, response) => {
  response.send('Servidor OK!!!')
})

// recupera a lista no servidor
app.get('/lista', (request, response) => {
  response.status(200).json(lista)
})

// recupera uma mensagem aleatória
app.get('/lista/msg/', (request, response) => {
    const sizeLista = lista.length
    const randomMsgIndex = Math.floor(Math.random() * sizeLista) + 1

    response.status(200).send(lista[randomMsgIndex])
})

// recupera um único item baseado na seu ID 
app.get('/lista/id/:uid', (request, response) => {
  const indexItem = request.params.uid - 1
  response.status(200).send(lista[indexItem].message)
})
  
// recupera um único item da lista baseado no seu keywords
app.get('/lista/:keywords', (request, response) => {
  let keywordsSearch = request.params.keywords.toUpperCase()
  let status = ''
  let msg = ''

  for (item of lista) {
    let keywordsList = item.keywords.toUpperCase()

    if (keywordsSearch == keywordsList) {
      status = 200
      msg = item
      break
    } else {
      status = 404
      msg = 'Item not found'
    }
  }
  response.status(status).json({ msg })
})

// recupera itens da lista baseados na categoria
// app.get('/lista/cat/:category', (request, response) => {
//   const sizeLista = lista.length
//   const randomMsgIndex = Math.floor(Math.random() * sizeLista) + 1

//   response.status(200).send(lista[randomMsgIndex].message)
// })

// armazena um novo item
app.post('/lista', (request, response) => {
  lista.push(request.body)
  response.status(201)
    .json({ msg: 'Item created successfully' })
})

// atualiza um item existente com o ID
app.put('/lista/id/:uid', (request, response) => {
  const indexItem = request.params.uid - 1
  const item = lista[indexItem]

  if (item) {
    const { keywords, message, category } = request.body
    item.keywords = keywords
    item.message = message
    item.category = category
    response.status(200).json({ msg: 'Item updated successfully' })
    return
  }
  response.status(404).json({ msg: 'Item not found' })
})

//exclui um item baseado no ID
app.delete('/lista/id/:uid', (request, response) => {
  const indexItem = request.params.uid - 1
  const item = lista[indexItem]
  let status = ''
  let msg = ''

  if (indexItem) {
    lista.splice(indexItem, 1)
    status = 200
    msg = 'Item deleted successfully'
    // response.status(200).json({ msg: 'Item deleted successfully' })
  } else {
    status = 404
    msg = 'Item not found'
  }
  response.status(status).json({ msg })
})

