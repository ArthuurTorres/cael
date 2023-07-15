import './Profile.css'
import img from '../assets/1.svg'
import people from '../assets/icons/people.png'

const Profile = () => {
  return (
    <section className="s2" id="who">
      <div className="caralho">
      <div className="profile-logo">
        
      </div>

      <div className="profile" data-aos="fade-up">
        <div className="text-profile">
        <img className="profile-logo" src={img} alt="logo da empresa" />
        <h3 className='t1'>Quem somos?</h3>
        <h2 className='t1'><span className='text-detail'>Sua melhor escolha.</span></h2>
        
        <p className='t2'>Nós somos uma consultoria especializada em seguros e 
        planos de saúde atuando há mais de 8 anos no mercado, oferencendo
        serviços alta qualidade e soluções personalizadas para os nossos clientes.
        Durante nossa trajetória, estabelecemos uma reputação sólida e confiável, 
        conquistando a confiança de milhares de pessoas e empresas em busca de 
        proteção e tranquilidade.
        </p>

        <p className='t2'>Na nossa corretora, entendemos que cada indivíduo e 
        cada empresa é único, com necessidades específicas. Por isso, nosso 
        objetivo é oferecer uma ampla gama de opções em seguros e planos de 
        saúde, para que nossos clientes encontrem a melhor solução para suas demandas particulares.
        Trabalhamos em parceria com as principais seguradoras e operadoras de planos de saúde do mercado, 
        garantindo acesso a produtos de qualidade, com coberturas abrangentes e serviços de excelência.
        </p>

        <p className='t2'>Além disso, acreditamos na importância de um 
        relacionamento duradouro com nossos clientes. Estamos comprometidos em 
        fornecer um atendimento ágil, eficiente e personalizado em todas as 
        etapas do processo, desde a cotação inicial até o suporte contínuo em 
        caso de sinistros ou dúvidas. Nossa missão é superar as expectativas 
        dos nossos clientes, tornando-se um parceiro de confiança.
        </p>

        <div className="profile-number">   
        <div>
        <img src={people} alt="a" />
        <h4 className="t1">+5000</h4>
        <p className='t1'>Clientes Satisfeitos</p>
        </div>
        </div>
      </div>  
    </div>
    </div>
    </section>
  )
}

export default Profile