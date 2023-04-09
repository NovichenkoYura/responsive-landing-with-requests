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
              <ul className="pricing__description">
                <li>Five Website</li>
                <li>Five User</li>
                <li>100 GB Bandwidth</li>
                <li>2 GB Storage</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};
