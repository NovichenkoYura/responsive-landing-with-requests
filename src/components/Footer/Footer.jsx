import './Footer.scss';
export const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__contacts-wrap">
          <div className="footer__contacts">
            <div>
              <i className="icofont-phone"></i>
            </div>
            <div className="footer__phone">
              <p>+012 345 678 102</p>
              <p>+012 345 678 102</p>
            </div>
          </div>
          <div className="footer__contacts">
            <div className="footer__contact-icon">
              <i className="icofont icofont-phone"></i>
            </div>
            <div className="footer__phone">
              <p>urname@email.com </p>
              <p>urwebsitenaem.com</p>
            </div>
          </div>

          <div className="footer__contacts">
            <div className="footer__contact-icon">
              <i className="icofont icofont-phone"></i>
            </div>
            <div className="footer__phone">
              <p>ur address goes here, </p>
              <p>street,Crossroad123.</p>
            </div>
          </div>
        </div>

        <div className="footer__social">
          <ul className="footer__social-list list">
            <li className="footer__social__item ">
              <a href="" className="link">
                <i className="icofont-facebook"></i>
              </a>
            </li>
            <li className="footer__social__item ">
              <a href="" className="link">
                <i className="icofont-twitter"></i>
              </a>
            </li>
            <li className="footer__social__item ">
              <a href="" className="link">
                <i className="icofont-pinterest"></i>
              </a>
            </li>
            <li className="footer__social__item ">
              <a href="" className="link">
                <i className="icofont-vimeo"></i>
              </a>
            </li>
            <li className="footer__social__item ">
              <a href="" className="link">
                <i className="icofont-google-plus"></i>
              </a>
            </li>
          </ul>
          <div className="footer__copyright">
            <p>Copyright © CodeCarnival. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
