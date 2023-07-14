import './Carousel.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import image1 from '../assets/partners/amil.svg'
import image2 from '../assets/partners/bradesco.svg'
import image3 from '../assets/partners/sulamerica-logo-vector.svg'
import image4 from '../assets/partners/golden.png'
import image5 from '../assets/partners/porto-seguro-logo.svg'
import image6 from '../assets/partners/unimed.png'
import image7 from '../assets/partners/notre.png'
import image8 from '../assets/partners/assim-saude-logo.svg'
import image9 from '../assets/partners/qualicorp-logo-2022.svg'
import image10 from '../assets/partners/supermed.png'
import image11 from '../assets/partners/prevent.png'
import image12 from '../assets/partners/medsenior.png'
import image13 from '../assets/partners/levesaude.png'


function SampleNextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray", borderRadius: "1rem" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray", borderRadius: "1rem" }}
      onClick={onClick}
    />
  );
}





const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ],
  }

  return (
    <div className="container-carousel" data-aos="fade-right">
      <div className="container-ctext">
      <h2 className='t1'>Operadoras e Seguradoras Disponíveis</h2>
      </div>
    <div className="carousel">
      <Slider {...settings}>
        <div>
        <img src={image1} alt='ss'/>
        </div>
        <div>
        <img src={image2} alt='ss'/>
        </div>
        <div>
        <img src={image3} alt='ss'/>
        </div>
        <div>
        <img src={image4} alt='ss'/>
        </div>
        <div>
        <img src={image5} alt='ss'/>
        </div>
        <div>
        <img src={image6} alt='ss'/>
        </div>
        <div>
        <img src={image7} alt='ss'/>
        </div>
        <div>
        <img src={image8} alt='ss'/>
        </div>
        <div>
        <img src={image9} alt='ss'/>
        </div>
        <div>
        <img src={image10} alt='ss'/>
        </div>
        <div>
        <img src={image11} alt='ss'/>
        </div>
        <div>
        <img src={image12} alt='ss'/>
        </div>
        <div>
        <img src={image13} alt='ss'/>
        </div>
      </Slider>
    </div>
    </div>
  );
}


export default Carousel