import { useEffect, useState } from 'react'
import './App.css'
import { Button, Stack, TextField } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

function Create() {
  const [nome, setNome] = useState('')
  const [especie, setEspecie] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  function handleSubmit(e) {
    e.preventDefault()

    if (id) {
      fetch('http://localhost:3000/pets/' + id, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, especie })
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
        body: JSON.stringify({ nome, especie })
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

  useEffect(() => {
    fetch('http://localhost:3000/pets/' + id)
      .then((resp) => resp.json())
      .then ((dados) => {
        console.log(dados)
        setNome(dados.nome)
        setEspecie(dados.especie)
  }).catch((erro) => {
    console.error(erro)
  })
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} sx={{ minWidth: 500 }}>

        <TextField value={nome} placeholder='Digite o nome:' id="nome" label="Nome" variant="outlined" fullWidth onChange={(e) => setNome(e.target.value)} />
        <TextField value={especie} placeholder='Digite a espécie:' id="especie" label="Espécie" variant="outlined" fullWidth onChange={(e) => setEspecie(e.target.value)} />
        <Button type="submit" variant="contained">Enviar</Button>

      </Stack>
    </form>
  )
}

export default Create
