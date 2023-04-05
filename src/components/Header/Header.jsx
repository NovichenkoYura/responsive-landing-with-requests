import './Header.css';
export const Header = () => {
  return (
    <header>
      <div className="container header__wrap">
        <svg width="104" height="26" className="header__icon">
          <use href="../../images/Logo_optimized.svg"></use>
        </svg>
        <div className="header__buttonlist">
          <button type="button" className="header__button">
            Users
          </button>
          <button type="button" className="header__button">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};
