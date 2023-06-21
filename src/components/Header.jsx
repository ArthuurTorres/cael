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
      <a href='#'>Serviços</a>
      <a href='#'>Quem Somos?</a>
      <a href='#'>Benefícios</a>
      <a href='#'>Contato</a>
      </nav>
    </header>
    </>
  )
}

export default Header