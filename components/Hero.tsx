// components/Hero.tsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>¡AHORA TODOS<br/>LOS EMPRENDEDORES<br/>PUEDEN TENER SU SITIO WEB!</h1>
          <p className="lead">+ 1 CORREO CORPORATIVO GRATIS — Desde S/. 99 Pago Único</p>
          <a className="button large button--white" href="#plans">VER OFERTA</a>
        </div>
        <div className="hero-image" aria-hidden>
          <img src="/images/hero.png" alt="Oferta lanzamiento" />
        </div>
      </div>
    </section>
  );
}
