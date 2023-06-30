import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewPerson } from './styles';

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Person } from '../../components/Person'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Find Disney</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" isActive/></li>
        
        <li><ButtonText title="Desenhos" /></li>

        <li><ButtonText title="Filmes" /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar por personagem" icon={ FiSearch }/>
      </Search>

      <Content>
        <Section title="Meus personagens">
          <Person data={{ 
            title: 'Cinderella', 
            tags: [
              {id: '1', name: 'Desenhoo'},
              {id: '2', name: 'Filmee'},
            ]
            }}
          />
        </Section>
      </Content>

      <NewPerson to="/new">
        <FiPlus />
          Adicionar personagem
      </NewPerson>
    </Container>
  )
}