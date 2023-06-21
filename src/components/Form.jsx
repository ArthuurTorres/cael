import './Form.css'

const Form = () => {
  return (
    <section className="containerform">
      <div className="bg-form">
      <div className="container">
        <form className="form">
          <h2 className='t1'>Preencha o Formulário e 
          <br></br>
          <span className="text-detail">receba sua cotação.</span></h2>
          <input type="text" name="Nome" placeholder='Nome' />
          <input placeholder='Email'></input> 
          <input placeholder='Telefone'></input>
          <select id="appearance-select">
          <option>Selecione o plano</option>
          <option>Individual</option>
          <option>Familiar</option>
          <option>Empreserial</option>
          <option>Odontológico</option>
          </select>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
    </section>
  )
}

export default Form