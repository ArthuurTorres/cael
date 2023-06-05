import './Header.css'
import logo from '../assets/1.svg'

const Header = () => {
  return (
    <>
    <header>
      <div>
      <img src={logo} alt="logo da empresa" />
      </div>
      <nav>
      <a href='#'>Home</a>
      <a href='#'>Planos</a>
      <a href='#'>Nada</a>
      <a href='#'>Contato</a>
      <a href='#'>Sobre nós</a>
      </nav>
    </header>
    </>
  )
}

export default Header