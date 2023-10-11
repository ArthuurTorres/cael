import './Whatsapp.css'
import whatsapp from '../assets/whatsapp.png'


const Whatsapp = () => {

  window.addEventListener('scroll', function() {
    var whatsappButton = document.getElementById('whatsapp-button');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollPosition > 0) {
      whatsappButton.style.display = 'block';
    } else {
      // whatsappButton.style.display = 'none';
    }
  });

  return (
    <div id="whatsapp-button">
      <a href="https://wa.me/message/5W66BVDQQDZOF1" target="_blank" rel="noopener noreferrer">
      <img src={whatsapp} alt="WhatsApp" />
      </a>
    </div>
  )
}

export default Whatsapp