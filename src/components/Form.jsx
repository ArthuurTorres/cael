import './Form.css'
import { useState } from 'react';

const Form = () => {

  const sendform = async () => {await fetch('https://caelconsultoria.online/api/sendEmail?'+ new URLSearchParams({nome: document.getElementById('nome').value,
  email: document.getElementById('email').value,
  telefone: document.getElementById('tel').value,
  plano: document.getElementById('appearance-select').value,
  }),{method:'POST'})
  .then(json => console.log(json)).catch(error => console.log(error))}


  const [enviando, setEnviando] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
    }, 9999999);
  };

  return (
    <section className="containerform">
      <div className="bg-form">
      <div className="container">
        <form className="form" id="form" onSubmit={handleSubmit} onClick={sendform}>
          <h2 className='t1'>Preencha o Formulário e 
          <br></br>
          <span className="text-detail">receba sua cotação.</span></h2>
          <input name="Nome" type="text" id="nome" placeholder='Nome' />
          <input name="Email" id="email" placeholder='Email' /> 
          <input name="Telefone" id="tel" placeholder='Telefone' />
          <select name="Tipo de Plano" id="appearance-select">
          <option>Selecione o plano</option>
          <option>Individual</option>
          <option>Familiar</option>
          <option>Empreserial</option>
          <option>Odontológico</option>
          </select>
          <button 
           type="submit"
           disabled={enviando}
           className={enviando ? 'enviando' : ''}
           >
            {enviando ? 'Enviado': 'Enviar'}
          </button>
        </form>
      </div>
    </div>
    </section>
  )
}

export default Form