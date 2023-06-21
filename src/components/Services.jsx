import './Services.css'
import health from '../assets/health.png'
import security from '../assets/security.png'
import dentistry from '../assets/dentistry.png'
import car from '../assets/car.png'


const Services = () => {
  return (

    <section className="section-services">
     

      <h2 className='t1'>Serviços<span className="text-detail">.</span></h2>
   

      <div className="icon-text t2">
      <div>
          <a href="#">
          <img src={health} alt="Refound" />
          </a>
      </div>
      <div>
          <a href="#">
          <img src={security} alt="Refound" />
          </a>
      </div>
      <div>
          <a href="#">
          <img src={dentistry} alt="Refound" />
          </a>
      </div>
      <div>
          <a href="#">
          <img src={car} alt="Refound" />
          </a>
      </div>
    </div>
    </section>
  )
}

export default Services