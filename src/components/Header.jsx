import './Header.css'
import logo from '../assets/1.svg'

const Header = () => {
  return (
    <>
    <header>
      <div>
      <a href='#'> 
      <img src={logo} alt="logo da empresa" />
      </a>
      </div>
      <nav className='t1'>
      <a href='#services'>Serviços</a>
      <a href='#who'>Quem Somos?</a>
      <a href='#benefits'>Benefícios</a>
      <a href='#contact'>Contato</a>
      </nav>
    </header>
    </>
  )
}

export default Header