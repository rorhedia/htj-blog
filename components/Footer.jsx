import Bullet from "./Bullet";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  let isVisible = router.pathname == "/contacto" ? false : true;

  const handleClick = (e) => {
    e.preventDefault();

    let href = e.target.getAttribute("href");
    router.push(href);
  };

  return (
    <footer className="container-fluid footer-container">
      {isVisible && (
        <div className="row mod-contact-us">
          <div className="col-12">
            <h1 className="text-header-contact">
              ¡Te queremos <br /> escuchar!
            </h1>
            <a className="btn-contact" href="/contacto" onClick={handleClick}>
              {/* <button >Contáctanos</button> */}
              Contáctanos
            </a>
          </div>
        </div>
      )}

      <div className="row pt-3">
        <div className="col-12 col-md-3 footer-section-img-1">
          <img src="/images/logo-dinkbit-22.svg" alt="logo-footer" />
        </div>
        <div className="col-6 col-md-3 footer-section-img-2"></div>
        <div className="col-6 col-md-3 footer-section-img-3">
          <img src="/images/mexico.png" alt="logo-footer" />
        </div>
        <div className="col-6 col-md-3 footer-section-img-4">
          <img src="/images/espana.png" alt="logo-footer" />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-3 footer-section-bullets-1">
          <img
            className="social-media fb"
            src="/images/fb-icon.png"
            alt="fb-footer"
          />
          <img
            className="social-media tw"
            src="/images/twitter-logo.png"
            alt="twitter-footer"
          />
          <img
            className="social-media be"
            src="/images/be-icon.png"
            alt="behance-footer"
          />
        </div>

        <div className="col-12 col-md-3 footer-section-bullets-2">
          <h5>EXPLORA</h5>
          <Bullet>Vende Online</Bullet>
          <Bullet>G Suite</Bullet>
          <Bullet>Trabaja con nosotros</Bullet>
        </div>

        <div className="col-12 col-md-3 footer-section-bullets-3">
          <h5>MÉXICO</h5>
          <Bullet urlImg="/images/mail.png" email="contacto@dinkbit.com">
            contacto@dinkbit.com
          </Bullet>
          <Bullet urlImg="/images/map-pin.png">(+52) 55 5554 1607</Bullet>
          <Bullet urlImg="/images/map-pin.png">
            Bosque de Ciruelos 130 PH 1201, Miguel Hidalgo, Ciudad de Máxico,
            México CP 11700
          </Bullet>
        </div>

        <div className="col-12 col-md-3 footer-section-bullets-4">
          <h5>ESPAÑA</h5>
          <Bullet urlImg="/images/mail.png" email="contacto@dinkbit.com">
            contacto@dinkbit.com
          </Bullet>
          <Bullet urlImg="/images/map-pin.png">
            (+34) 657 55 9397
            <br />
            (+34) 910 37 6757
          </Bullet>
          <Bullet urlImg="/images/map-pin.png">
            Calle de Hermosilla, 48, 1Dch Madrid, España CP 28001
          </Bullet>
        </div>
      </div>

      <div className="row border-top pt-2 mt-2">
        <div className="col-12 col-md-4 d-flex justify-content-around pt-3 text-muted">
          <span>Aviso de privacidad</span>
          <span>Términos y condiciones</span>
        </div>
        <div className="col-12 col-md-8 mt-3">
          <img
            className="logos-footer"
            src="/images/logos-23.svg"
            alt="logos-footer"
          />
          <img
            className="logos-footer"
            src="/images/logos-24.png"
            alt="logos-footer"
          />
          <img
            className="logos-footer"
            src="/images/logos-25.png"
            alt="logos-footer"
          />
          <img
            className="logos-footer"
            src="/images/logos-26.png"
            alt="logos-footer"
          />
        </div>
      </div>
    </footer>
  );
}
