import './DemoCards.css';
export const DemoCards = () => {
  return (
    <section className="container ">
      <div className="democards__wrap">
        <div className="democards__decription">
          <h1 className="democards__title">choose your demo</h1>
          <p className="democards__announcement">You can choose moto page from here</p>
        </div>
        <ul className="list">
          <li className="democards__item">
            <a href="" className="link">
              <div className="democards__linkWrap">
                <picture>
                  <source srcSet="https://htmldemo.net/moto/img/moto/slider-two-bg.webp" />
                  <img
                    src="https://htmldemo.net/moto/img/moto/slider-two-bg.webp"
                    alt="Moto solution"
                  />
                </picture>
                <p className="portfolio-img-text">Live preview</p>
              </div>

              <div className="democard__shortinfo">
                <h2 className="democard__title">homepage style one</h2>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

// You Can Choose Moto Page From Here
