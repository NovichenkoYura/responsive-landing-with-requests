import './Header.css';
export const Header = () => {
  return (
    <header>
      <div className="container header__wrap">
        <svg className="header__icon">
          <use href="https://public-assets.envato-static.com/assets/logos/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg"></use>
        </svg>
        <button type="button" className="header__button">
          Buy now
        </button>
      </div>
    </header>
  );
};
