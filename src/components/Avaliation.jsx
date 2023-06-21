import './Avaliation.css'
import like from '../assets/icons/like.png'
import star from '../assets/icons/star.png'
import fb1 from '../assets/fb1.jpeg'
import fb2 from '../assets/fb2.jpeg'
import fb3 from '../assets/fb3.jpeg'
import fb4 from '../assets/fb4.jpeg'

const Avaliation = () => {
  return (
    <section className="container-avaliation">
      <h1 className="t1">
        <img className="like"src={like} alt="like"/>O que os clientes dizem sobre a Cael<span className="text-detail">.</span>
      </h1>

      <div className="avaliation">
      <div className="avaliation-text">
        <p className="t1">&quot;Caio, conte sempre com nossa indicação! Não é atoa que
         só faço plano de saúde com você. É sempre gentil, atencioso e cuidadoso
          conosco, tenho certeza que vai colher bons frutos e alcançara suas metas.&quot;</p>
        <h3 className="t1">Marise Caresia</h3>
        <img className="photo" src={fb1} alt="foto"/>
        <div>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        </div>
        </div>
      <div className="avaliation-text2">
        <p className="t1">&quot;Melhor corretor, melhor assessória, melhor em tudo que diz respeito a sua profissão.Pra mim você é nota mil.&quot;</p>
        <h3 className="t1">Tânia Maria</h3>
        <img className="photo" src={fb2} alt="foto"/>
        <div>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        </div>
      </div>
      <div className="avaliation-text">
        <p className="t1">&quot;Fui indicada para fazer o plano de saúde da minha família com o Caio. Tenho assessória quando preciso, atendimento eficiente com o melhor custo benéficio. Eu sempre indico a Cael para minhas amigas.&quot;</p>
        <h3 className="t1">Carla Frazão</h3>
        <img className="photo" src={fb3} alt="foto"/>
        <div>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        </div>
      </div>
      <div className="avaliation-text2">
        <p className="t1">&quot;Você é um excelente Profissional, 
        tenho serviço diferenciado.Tenha certeza que sempre 
        que alguem me procurar vou indicar a Cael. Parabéns pelo 
        profissionalismo.&quot;</p>
        <h3 className="t1">Alexandre Vasconsellos</h3>
        <img className="photo" src={fb4} alt="foto"/>
        <div>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        </div>
      </div>
    </div>

    </section>
  )
}

export default Avaliation