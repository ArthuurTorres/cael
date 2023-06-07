import './Profile.css'
import img from '../assets/banner1.jpg'
import img1 from '../assets/icons/img1.gif'
import img2 from '../assets/icons/img2.gif'
import img3 from '../assets/icons/img3.gif'
import img4 from '../assets/icons/img4.gif'

const Profile = () => {
  return (
    <section className="s2">
      <div className="profile-logo">
        <img src={img} alt="logo da empresa" />
      </div>
      <div className="profile">
        <h2>Quem somos?</h2>
        <p>Somos uma empresa de consultoria de seguros e planos de saúde com um
           único objetivo: tornar a vida dos nossos clientes mais fácil. Sabemos
            que escolher o plano de saúde ideal pode ser complicado e estressante
            , por isso nos esforçamos ao máximo para oferecer com excelência um
             atendimento personalizado e humano.</p>

        <div className="profile-number">   
        <div>
        <img src={img1} alt="a" />
        <h4>+3.600</h4>
        <p>Clientes</p>
        </div>
        <div>
        <img src={img2} alt="a" />
        <h4>+100</h4>
        <p>Cotações Diárias</p>
        </div>
        <div>
        <img src={img3} alt="a" />
        <h4>+11</h4>
        <p>Operadoras</p>
        </div>
        <div>
        <img src={img4} alt="a" />
        <h4>+5000</h4>
        <p>Satisfeitos</p>
        </div>
      </div>  
    </div>
     
    </section>
  )
}

export default Profile