import './FrontView.css';
export const FrontView = () => {
  return (
    <section className="container frontview">
      <div className="frontview__wrap">
        <h3 className="frontview__title">moto app landing page template</h3>
        <div className="frontview__content">
          <button className="frontview__btn">view all demo</button>
          <button className="frontview__btn">buy now</button>
        </div>
      </div>
    </section>
  );
};
