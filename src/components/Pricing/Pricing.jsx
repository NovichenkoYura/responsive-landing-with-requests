import './Pricing.css';
export const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing__heading">
        <h2 className="pricing__sectionTitle">Pricing plan</h2>
        <p>
          Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is
          de standaard proeftekst in deze bedrijfstak sinds.
        </p>
      </div>

      <ul className="list pricing__list">
        <li className="pricing__item">
          <div className="pricing__content">
            <div className="pricing__details">
              <h4 className="pricing__title">basic</h4>
              <span className="pricing__price">40</span>
              <ul className="pricing__description list">
                <li>Five Website</li>
                <li>Five User</li>
                <li>100 GB Bandwidth</li>
                <li>2 GB Storage</li>
              </ul>
            </div>
            <div className=" ">
              <a href="" className="pricing__btn link">
                Purchase Now
              </a>
            </div>
          </div>
        </li>
        <li className="pricing__item">
          <div className="pricing__content">
            <div className="pricing__details">
              <h4 className="pricing__title">basic</h4>
              <span className="pricing__price">50</span>
              <ul className="pricing__description list">
                <li>20 Website</li>
                <li>20 User</li>
                <li>200 GB Bandwidth</li>
                <li>20 GB Storage</li>
              </ul>
            </div>
            <div className=" ">
              <a href="" className="pricing__btn link">
                Purchase Now
              </a>
            </div>
          </div>
        </li>
        <li className="pricing__item">
          <div className="pricing__content">
            <div className="pricing__details">
              <h4 className="pricing__title">unlimited</h4>
              <span className="pricing__price">60</span>
              <ul className="pricing__description list">
                <li>Unlimited Website</li>
                <li>Unlimited User</li>
                <li>Unlimited Bandwidth</li>
                <li>Unlimited Storage</li>
              </ul>
            </div>
            <div className=" ">
              <a href="" className="pricing__btn link">
                Purchase Now
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};
