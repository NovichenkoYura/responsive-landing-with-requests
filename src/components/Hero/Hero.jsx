import './Hero.css';
export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrap">
        <div className="hero__content">
          <h3 className="hero__title">moto all solutions head</h3>
          <p className="hero__">
            Nulla aliquet, erat a egestas lacinia, leo libero dapibus nisl, quis pulvinar dolor
            justo id turpis. Nulla odio orci.
          </p>
          <a href="" className="hero__btn link">
            Download
          </a>
          {/* <div className="hero__slider">
            <img src="https://htmldemo.net/moto/moto/img/slider/10.png" />
          </div> */}
        </div>
      </div>
    </section>
  );
};
