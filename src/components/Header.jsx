import "./Header.css";
import logo from "../assets/1.svg";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <a href="#">
            <img data-aos="fade-right" data-aos-delay="150" src={logo} alt="logo da empresa" />
          </a>
        </div>
        <nav className="t1" data-aos="fade-left" data-aos-delay="250">
          <a href="#services">Serviços</a>
          <a href="#who">Quem Somos?</a>
          <a href="#benefits">Benefícios</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
