import './Service.css';
export const Service = () => {
  return (
    <section className="service">
      <h2 className="service__title" hidden>
        Service
      </h2>
      <ul className="list service__list">
        <li className="service__item">
          <div className="service__icon">
            <img src="https://htmldemo.net/moto/moto/img/icon/service-icon-1.png" alt="customize" />
          </div>
          <div className="service__content">
            <h2 className="service__title">Easy to customize</h2>
            <p className="service__discription">
              Lorem Ipsum is slechts een preksts uit het drukkerij- en zetterija Lorem Ipsum is de
              stan.
            </p>
          </div>
        </li>
        <li className="service__item">
          <div className="service__icon">
            <img src="https://htmldemo.net/moto/moto/img/icon/service-icon-2.png" alt="design" />
          </div>
          <div className="service__content">
            <h2 className="service__title">Awesome Design </h2>
            <p className="service__discription">
              Lorem Ipsum is slechts een preksts uit het drukkerij- en zetterija Lorem Ipsum is de
              stan.
            </p>
          </div>
        </li>
        <li className="service__item">
          <div className="service__icon">
            <img src="https://htmldemo.net/moto/moto/img/icon/service-icon-3.png" alt="use" />
          </div>
          <div className="service__content">
            <h2 className="service__title">Easy To Use</h2>
            <p className="service__discription">
              Lorem Ipsum is slechts een preksts uit het drukkerij- en zetterija Lorem Ipsum is de
              stan.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
