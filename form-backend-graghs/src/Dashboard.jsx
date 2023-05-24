import { Stack } from "@mui/material";
import { useEffect, useState } from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const [pets, setPets] = useState([])
  
  const petsPie = [
      {
        id: 1,
        nome: 'Cebolinha',
        especie: 'Cão',
        idade: 15
      },
      {
        id: 2,
        nome: 'Cascão',
        especie: 'Gato',
        idade: 4
      },
      {
        nome: 'Magali',
        especie: 'Girafa',
        id: 3,
        idade: 5
      },
      {
        nome: 'Mônica',
        especie: 'Pardal',
        id: 4,
        idade: 2
      },
      {
        nome: 'mic',
        especie: 'gato',
        id: 5,
        idade: 12
      },
      {
        nome: 'Mingal',
        especie: 'Gato',
        id: 6,
        idade: 7
      },
      {
        nome: 'Mony',
        especie: 'Peixe',
        id: 7,
        idade: 8
      }
    ]

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

  return (
    <Stack direction='column' spacing={2}>
      <LineChart width={600} height={400} data={pets}>
        <Line
          dot={{ stroke: 'blue', strokeWidth: 6 }}
          type='monotone'
          dataKey='idade'
          stroke='#8884d8'
        />
        <CartesianGrid stroke='#aaa' />
        <XAxis dataKey='nome' />
        <YAxis />
      </LineChart>

      <PieChart width={400} height={400}>
        <Pie
          dataKey='idade'
          startAngle={180}
          endAngle={0}
          data={petsPie}
          cx='50%'
          cy='50%'
          outerRadius={80}
          fill='#8884d8'
          label
        />
      </PieChart>

      <PieChart width={400} height={400}>
        <Pie
          data={petsPie}
          dataKey='idade'
          cx='50%'
          cy='50%'
          innerRadius={70}
          // outerRadius={90}
          fill='#82ca9d'
          label
        />
      </PieChart>

      <PieChart width={400} height={400}>
        <Pie data={pets} dataKey="idade" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
        <Pie data={pets} dataKey="idade" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
      </PieChart>
    </Stack>
  );
}