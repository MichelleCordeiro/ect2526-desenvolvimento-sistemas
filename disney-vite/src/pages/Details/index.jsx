import { Container, Links } from "./styles.js"
import { Header } from "../../components/Header/index.jsx"
import { Button } from '../../components/Button/index.jsx'
import { Section } from '../../components/Section/index.jsx'


export function Details(){
  
  return(
    <Container>
      <Header />

      <h1>FIND DISNEY</h1>
      <span>Michelle cordeiro</span>

      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
        </Links>
      </Section>

      <Button title="Login" loading />
      <Button title="Cadastrar" />
      <Button title="Voltar" />

    </Container>
  )
}
