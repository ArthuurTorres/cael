import './Contact.css'
import mail from '../assets/icons/mail.png'
import telephone from '../assets/icons/telephone.png'
import instagram from '../assets/icons/instagram.png'
import arrowl from '../assets/icons/arrowl.png'
import arrowr from '../assets/icons/arrowr.png'

const Contact = () => {
  return (
    <>
    <section className="container-contact">
    <h2 className='t1'>Contatos<span className="text-detail">.</span></h2>
      <div className="section-contact">
        <div className="contact">
        <div className="contact-logo">
        <img src={mail} alt="mail" />
        </div>
          <div className="contact-text">
            <h3 className='t1'>Email</h3>
            <p className='t2'>consultoriacaell@gmail.com</p>
        </div>
        </div>

        <div className="contact">
        <div className="contact-logo">
        <img src={telephone} alt="telephone" />
        </div>
          <div className="contact-text">
            <h3 className='t1'>Telefone</h3>
            <p className='t2'>+55 (21) 98222-4637</p>
          </div>
        </div>

        <div className="contact">
        <div className="contact-logo">
          <img src={instagram} alt="instagram" />
          </div>
            <div className="contact-text">
              <h3 className='t1'>Social</h3>
              <p className='t2'>@consultoriacael</p>
          </div>
          </div>
        </div>
        
        <div className="contact-button">
        <button className='button'>
        <img className='buttonarrow' src={arrowr} alt="arrow left"/>
        <a href="https://wa.me/message/5W66BVDQQDZOF1" target="_blank" rel="noopener noreferrer" className='t1'><span>SOLICITE SUA COTAÇÃO</span></a>
        <img className='buttonarrow' src={arrowl} alt="arrow right"/>
        </button>
        </div>
          

    </section>
    </>
  )
}

export default Contact