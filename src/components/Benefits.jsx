import './Benefits.css'

const Benefits = () => {
  return (
    <section className="section-benefits" id="benefits">
      <h2 className='t1'>Benefícios<span className="text-detail">.</span></h2>

      <div className="benefits">
        <div>
          <h3 className='t1'>Troca Descomplicada</h3>
          <p className='t2'>Se você já adquiriu um plano conosco e deseja fazer uma troca,
          temos uma ótima notícia: não cobramos nenhuma comissão!
          Isso significa que você pode fazer a mudança sem se preocupar com
          custos adicionais. Nosso objetivo é garantir sua satisfação e oferecer
          flexibilidade para atender às suas necessidades em constante mudança.
          Conte conosco para realizar uma troca de plano tranquila e sem custos.
          </p>
        </div>
        <div className="cashback">
          <h3 className='t1'>Cashback CAEL</h3>
          <p className='t2'>Na nossa corretora, sua indicação vale dinheiro!
          Após contratar o seu plano de saúde conosco, indique nossos serviços
          para amigos e familiares, e você receberá 10% do valor de volta como
          cashback da CAEL. É uma forma de recompensarmos sua confiança e
          agradecer pelo apoio. Quanto mais indicações você fizer, mais dinheiro
          volta para o seu bolso. Conte conosco não apenas para oferecer os
          melhores planos de saúde, mas também para trazer benefícios financeiros
          adicionais através do nosso programa de indicação.
          </p>
        </div>
        <div>
          <h3 className='t1'>Atendimento All-On</h3>
          <p className='t2'>Simplificamos o processo de cotação e contratação
          para você. Agora, pode fazer tudo online, via WhatsApp, ligação ou 
          e-mail, após contato com nossos consultores. Resolva tudo sem sair
          de casa, com suporte personalizado e orientação da nossa equipe.
          Aproveite a comodidade e os benefícios dos nossos serviços,
          disponíveis a apenas um clique ou uma ligação de distância.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Benefits