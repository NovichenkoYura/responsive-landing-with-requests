import './Features.css';
export const Features = () => {
  return (
    <section className="features">
      <h2 className="features__title" hidden>
        Advantages
      </h2>
      <ul className="list features__list">
        <li className="feature__item">
          <div className="feature__icon">
            <img src="https://htmldemo.net/moto/moto/img/icon/service-icon-1.png" alt="customize" />
          </div>
          <div className="feature__content">
            <h2 className="feature__title">Easy to customize</h2>
            <p className="feature__discription">
              Lorem Ipsum is slechts een preksts uit het drukkerij- en zetterija Lorem Ipsum is de
              stan.
            </p>
          </div>
        </li>
        <li className="feature__item">
          <div className="feature__icon">
            <img src="https://htmldemo.net/moto/moto/img/icon/service-icon-2.png" alt="design" />
          </div>
          <div className="feature__content">
            <h2 className="feature__title">Awesome Design </h2>
            <p className="feature__discription">
              Lorem Ipsum is slechts een preksts uit het drukkerij- en zetterija Lorem Ipsum is de
              stan.
            </p>
          </div>
        </li>
        <li className="feature__item">
          <div className="feature__icon">
            <img src="https://htmldemo.net/moto/moto/img/icon/service-icon-3.png" alt="use" />
          </div>
          <div className="feature__content">
            <h2 className="feature__title">Easy To Use</h2>
            <p className="feature__discription">
              Lorem Ipsum is slechts een preksts uit het drukkerij- en zetterija Lorem Ipsum is de
              stan.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
