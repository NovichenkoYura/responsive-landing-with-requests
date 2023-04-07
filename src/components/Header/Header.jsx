import './Header.css';
export const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="header__nav">
          <a className="header__logo" href="">
            <img src="	https://htmldemo.net/moto/moto/img/icon/logo.png" />
          </a>
          <button type="button" className="header__onBtnOpen"></button>
          <ul className="nav__list list">
            <li className="nav__item">
              <a href="" className="nav__link link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link link">
                Features
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link link">
                Pricing
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link link">
                Client
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link link">
                Contact
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link link">
                Team
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link link nav__btn">
                Download
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
