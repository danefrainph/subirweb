import Header from "../components/Header";
import Hero from "../components/Hero";
import Plans from "../components/Plans";
import Planscopy from "../components/Planscopy";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section id="how" className="container">
          <h2>¿Cómo brindamos precios accesibles?</h2>
          <p>USAMOS SUBDOMINIOS — Un subdominio es una extensión del dominio principal que permite crear más sitios web sin necesidad de adquirir un nuevo dominio.</p>
          <p><strong>Ejemplo:</strong> floreria.tusitio.com.pe</p>

          <h3>USAMOS UN HOSTING OPTIMIZADO</h3>
          <p>Brindamos un Hosting ajustado al tamaño de la página.</p>
        </section>

        <Plans />

        <Planscopy />

      </main>

      <Footer />
    </>
  );
}
