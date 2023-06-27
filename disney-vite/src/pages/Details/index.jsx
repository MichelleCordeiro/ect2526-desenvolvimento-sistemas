import { Container } from "./styles.js"
import { Button } from '../../components/Button/index.jsx'

export function Details(){
  
  return(
    <Container>
      <h1>FIND DISNEY</h1>
      <span>Michelle cordeiro</span>

      <Button title="Login" loading />
      <Button title="Cadastrar" />
      <Button title="Voltar" />

    </Container>
  )
}
