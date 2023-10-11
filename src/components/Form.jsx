import './Form.css'
import { useState } from 'react'
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'

const Form = () => {
  const [enviando, setEnviando] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm()

  const sendform = async () => {
    setEnviando(true)

    try {
      // Simulação de uma requisição assíncrona
      await fetch(
        'https://gorillabyte.com.br/api/sendEmail?' +
          new URLSearchParams(new FormData(document.getElementById('form'))),
        {
          method: 'POST',
          headers: {
            "Token": "gRUMzetXAnmMBBxPTbR652604a38f52b",
          },
        }
      ).finally(() => {
        setValue('telefone', '')
        reset()
      })
    } catch (error) {
      console.log('Ocorreu um erro ao enviar o formulário:', error)
      setEnviando(false)
    }
  }

  return (
    <section className="containerform" data-aos="fade-right">
      <div className="bg-form">
        <div
          className="container"
          data-aos="zoom-in-left"
          data-aos-duration="400"
        >
          <form className="form" id="form" onSubmit={handleSubmit(sendform)}>
            <h2 className="t1">
              Preencha o Formulário e<br></br>
              <span className="text-detail">receba sua cotação.</span>
            </h2>
            <input
              name="Nome"
              type="text"
              id="nome"
              placeholder="Nome"
              {...register('nome', { required: true, minLength: 3 })}
            />
            <span className="space-form">
              {errors.nome && errors.nome.type === 'required' ? (
                <h4 className="error t1">*Coloque seu nome</h4>
              ) : (
                ''
              )}
              {errors.nome && errors.nome.type === 'minLength' ? (
                <h4 className="error t1">*Este nome é muito Curto</h4>
              ) : (
                ''
              )}
            </span>
            <input
              name="Email"
              id="email"
              placeholder="Email"
              {...register('email', {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                },
              })}
            />
            <span className="space-form">
              {errors.email && errors.email.type === 'required' ? (
                <h4 className="error t1">*Coloque seu email</h4>
              ) : (
                ''
              )}
              {errors.email && errors.email.type === 'pattern' ? (
                <h4 className="error t1">*Preencha com um email válido</h4>
              ) : (
                ''
              )}
            </span>
            <InputMask
              mask="(99) 99999-9999"
              name="telefone"
              id="tel"
              placeholder="Telefone"
              {...register('telefone', {
                required: true,
                pattern: {
                  value: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/,
                },
              })}
            />
            <span className="space-form">
              {errors.telefone && errors.telefone.type === 'required' ? (
                <h4 className="error t1">*Coloque seu número</h4>
              ) : (
                ''
              )}
              {errors.telefone && errors.telefone.type === 'pattern' ? (
                <h4 className="error t1">*Preencha com um número válido</h4>
              ) : (
                ''
              )}
            </span>
            <select
              name="Plano"
              id="appearance-select"
              {...register('plano', { required: true })}
            >
              <option value="">Selecione o plano</option>
              <option>Individual</option>
              <option>Familiar</option>
              <option>Empresarial</option>
              <option>Odontológico</option>
            </select>
            {errors.plano && errors.plano.type === 'required' ? (
              <h4 className="error t1">*Selecione o tipo de plano</h4>
            ) : (
              ''
            )}

            <button
              type="submit"
              disabled={enviando}
              className={enviando ? 'enviando' : ''}
            >
              {enviando ? 'Enviado' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form
