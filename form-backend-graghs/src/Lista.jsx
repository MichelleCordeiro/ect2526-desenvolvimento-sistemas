import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'


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

    const meusPets = pets.map((p) => <h5 key={p.id}>
        <Link to={"/create/" + p.id}> {p.nome} </Link>
    </h5>)

    return (
        <>
            {meusPets}
        </>
    )
}