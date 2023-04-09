import './FunFacts.css';

export const FunFacts = () => {
  return (
    <section className="funfacts">
      <div className="funfacts__wrap">
        <ul className="funfacts__list list">
          <li className="funfacts__item">
            <div className="funfacts__content">
              <h2 className="funfacts__counter">200</h2>
              <h5 className="funfacts__singlefact">Downloads</h5>
            </div>
          </li>
          <li className="funfacts__item">
            <div className="funfacts__content">
              <h2 className="funfacts__counter">1000</h2>
              <h5 className="funfacts__singlefact">Active installs</h5>
            </div>
          </li>
          <li className="funfacts__item">
            <div className="funfacts__content">
              <h2 className="funfacts__counter">80</h2>
              <h5 className="funfacts__singlefact">Happy clients</h5>
            </div>
          </li>
          <li className="funfacts__item">
            <div className="funfacts__content">
              <h2 className="funfacts__counter">100</h2>
              <h5 className="funfacts__singlefact">Total app rat</h5>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
