import './form.css'

export default function MyForm() {
  return (
    <form action='' method='get' className='form-123'>
      <label htmlFor='name'>
        Nome
        <input type='text' name='name' placeholder='Fulana' required />
      </label>

      <label htmlFor='lastname'>
        Sobrenome
        <input type='text' name='lastname' placeholder='Silva' required />
      </label>

      <label htmlFor='email'>
        E-mail
        <input type='email' name='email' placeholder='fulana@email.com' required />
      </label>

      <label htmlFor='fone'>
        Telefone
        <input type='tel' name='fone' placeholder='(DDD) XXXX-XXXX' required />
      </label>

      <label htmlFor='msg'>
        Mensagem
        <textarea
          name='msg'
          rows={5}
          cols={40}
          // placeholder='Escreva sua mensagem aqui'
          defaultValue='Escreva sua mensagem aqui'
          required
        />
      </label>

      <input type='submit' value='ENVIAR' />
    </form>
  );
}