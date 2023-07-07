import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Lista() {
    const [pets, setPets] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/pets')
            .then(resp => resp.json())
            .then(data => {
                setPets(data)
                // console.log(data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    const meusPets = pets.map((p) => 
        <h5 key={p.id} style={{ fontSize: 'medium', display:"flex" }}>
            <Link to={"/update/" + p.id}> 
                Nome: {p.nome}  -  Espécie: {p.especie}  -  Idade: {p.idade}
            </Link>
            {/* <DeleteForeverIcon style={{ paddingLeft: 16, color: '#8d2d2d' }} /> */}
        </h5>
    )

    return (
        <>
            {meusPets}
        </>
    )
}