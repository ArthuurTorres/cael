import './Form.css'
import { useState } from 'react';
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form'

const Form = () => {

  const sendform = async () => {

    await fetch(
      "https://caelconsultoria.online/api/sendEmail?" +
        new URLSearchParams(new FormData(document.getElementById("form"))),
      { method: "POST" }
    )
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
    }

  
  const [enviando, setEnviando] = useState(false);
  const {register, handleSubmit, formState:{errors}} = useForm();



  return (
    <section className="containerform">
      <div className="bg-form">
      <div className="container">
        <form className="form" id="form" onSubmit={handleSubmit(sendform)}>
          <h2 className='t1'>Preencha o Formulário e 
          <br></br>
          <span className="text-detail">receba sua cotação.</span></h2>
          <input name="Nome" type="text" id="nome" placeholder='Nome' {...register('nome',{required:true, minLength:3})} />
          {errors.nome && errors.nome.type==='required' ? <span className="error t1">*Este campo é Requerido</span> : ''}
          {errors.nome && errors.nome.type==='minLength' ? <span className="error t1">*Este nome é muito Curto</span> : ''}
          <input name="Email" id="email" placeholder='Email' {...register('email',{required:true, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i, }})} /> 
          {errors.email && errors.email.type==='required' ? <span className="error t1">*Preencha este campo</span> : ''}
          {errors.email && errors.email.type==='pattern' ? <span className="error t1">*Preencha com um email válido</span> : ''}
          <InputMask mask="(99) 9999-9999" name="Telefone" id="tel" placeholder='Telefone' />
          <select name="Tipo de Plano" id="appearance-select">
          <option>Selecione o plano</option>
          <option>Individual</option>
          <option>Familiar</option>
          <option>Empresarial</option>
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