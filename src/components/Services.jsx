import "./Services.css";
import health from "../assets/health.png";
import security from "../assets/security.png";
import dentistry from "../assets/dentistry.png";
import car from "../assets/car.png";

const Services = () => {
  return (
    <section id="services" className="section-services">
      <h2 className="t1" data-aos="fade-down">
        Serviços<span className="text-detail">.</span>
      </h2>

      <div className="icon-text t2">
        <div data-aos="fade-up" data-aos-delay="100">
          <a
            href="https://wa.me/message/5W66BVDQQDZOF1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={health} alt="Refound" />
          </a>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <a
            href="https://wa.me/message/5W66BVDQQDZOF1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={security} alt="Refound" />
          </a>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <a
            href="https://wa.me/message/5W66BVDQQDZOF1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dentistry} alt="Refound" />
          </a>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://wa.me/message/5W66BVDQQDZOF1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={car} alt="Refound" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
