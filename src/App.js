import Cadastro from './components/cadastro.js'
import Produtos from './components/products.js'

function MyButton() {
  function handleClick() {
    alert('Fui clicado')
  }

  return (
    <button onClick={handleClick}>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app!!!!!</h1>

      <MyButton />
      <MyButton 
        className="btn2" 
        title="Learn More"
        color="#841584"
      />

      <img 
        className="avatar"
        src="https://img.freepik.com/free-photo/jesus-tomb-location-concept_23-2149435865.jpg?w=900&t=st=1681735955~exp=1681736555~hmac=c4fa06f4dcb7071bbe53b90348b27383315e64612a4726c2c67515f7fce954c9" 
      />

      <Cadastro className="cadastro" />
      <Produtos />

    </div>
  );
}
