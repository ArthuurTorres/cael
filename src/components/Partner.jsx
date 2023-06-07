import './Partner.css'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef} from 'react'
import arrowl from '../assets/icons/arrowl.png'
import arrowr from '../assets/icons/arrowr.png'
import image1 from '../assets/partners/amil.svg'
import image2 from '../assets/partners/bradesco.svg'
import image3 from '../assets/partners/sulamerica-logo-vector.svg'
import image4 from '../assets/partners/golden-cross-logo.svg'
import image5 from '../assets/partners/porto-seguro-logo.svg'
import image6 from '../assets/partners/Unimed-Rio.png'
import image7 from '../assets/partners/grupo-notredame.jpg'
import image8 from '../assets/partners/assim-saude-logo.svg'
import image9 from '../assets/partners/qualicorp-logo-2022.svg'
import image10 from '../assets/partners/qualicorp-logo-2022.svg'
import image11 from '../assets/partners/qualicorp-logo-2022.svg'

const images =[  image1, image2, image3, image4, image5, image6, image7,image8, image9,image10, image11]

const Partner = () => {

  const carousel = useRef();
  const [ width, setWidth] = useState(0)

  useEffect(()=>{
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
      <section className="s1">
      <motion.h2>Conheça as operadoras parceiras da Cael Consultoria e escolha o melhor plano de saúde <span className="text-detail">para você.</span></motion.h2>
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>

        <motion.div 
         className="inner"
         drag="x"
         dragConstraints={{right:0, left: -width}}
         initial={{x:500}}
         animate={{x:0}}
         transition={{duration:0.8}}
         >
          <img className="arrow-detail" src={arrowr} alt=""/>
          {images.map(image => (
            <motion.div className="item" key={image}>
              <img src={image} alt="Text alt"/>
            </motion.div>
          ))}
          <img className="arrow-detail" src={arrowl} alt=""/>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Partner