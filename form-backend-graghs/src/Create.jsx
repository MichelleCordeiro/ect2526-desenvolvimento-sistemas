import { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Button, Stack, TextField } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import './App.css'

function Create() {
  const [nome, setNome] = useState('')
  const [especie, setEspecie] = useState('')
  const [idade, setIdade] = useState('')

  const navigate = useNavigate()
  const { id } = useParams()

  function handleSubmit(e) {
    e.preventDefault()

    if (id) {
      fetch('http://localhost:3000/pets/' + id, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, especie, idade })
      }).then (() => {
        console.log("Registro alterado!")
        navigate('/')
      }).catch((erro) => {
        console.error(erro)
      })

    } else {
      fetch('http://localhost:3000/pets/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, especie, idade })
      }).then (() => {
        console.log("Novo registro criado!")
        navigate('/')
      }).catch((erro) => {
        console.error(erro)
      })
    }

    //console.log(nome)
    //console.log("Enviou um novo registro: " + nome + ", " + especie + "!")
  }

  
  function handleDelete(e) {
    e.preventDefault()

    fetch('http://localhost:3000/pets/' + id, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, especie, idade })
    }).then (() => {
      console.log("Registro apagado!")
      navigate('/')
    }).catch((erro) => {
      console.error(erro)
    })
  }

  useEffect(() => {
    fetch('http://localhost:3000/pets/' + id)
      .then((resp) => resp.json())
      .then ((dados) => {
        // console.log(dados)
        setNome(dados.nome)
        setEspecie(dados.especie)
        setIdade(dados.idade)
  }).catch((erro) => {
    console.error(erro)
  })
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} sx={{ minWidth: 500}}>

        <TextField value={nome} placeholder='Digite o nome' id="nome" label="Nome" variant="outlined" fullWidth onChange={(e) => setNome(e.target.value)} className='inputCreate'/>

        <TextField value={especie} placeholder='Digite a espécie' id="especie" label="Espécie" variant="outlined" fullWidth onChange={(e) => setEspecie(e.target.value)} className='inputCreate' />

        <TextField value={idade} placeholder='Digite a idade' id="idade" label="Idade" variant="outlined" fullWidth onChange={(e) => setIdade(e.target.value)} className='inputCreate' />
        
        <Button type="submit" variant="contained" >Enviar</Button>
      </Stack>

      <Button style={{ paddingLeft: 16, backgroundColor: '#8d2d2d', color: 'white' }} onClick={handleDelete} >
        <DeleteForeverIcon />
        Apagar
      </Button>

    </form>
  )
}

export default Create
