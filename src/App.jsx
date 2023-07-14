import './components/utilities/typography.css'
import './components/utilities/colors.css'
import './components/utilities/responsive.css'
import Form from './components/Form'
import Header from './components/Header'
import Profile from './components/Profile'
import Banner from './components/Banner'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/Whatsapp'
import CarouselComponent from './components/Carousel'
import Avaliation from './components/Avaliation'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {

  return (
    <>
      <Header />
      <Form />
      <CarouselComponent />
      <Banner />
      <Services />
      <Profile />
      <Benefits />
      <Avaliation />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  )
}

export default App
