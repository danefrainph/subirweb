export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <a href="/">tusitio.com.pe</a>
        </div>
        <nav>
          <a href="#plans">Precios</a>
          <a href="#how">Sobre nosotros</a>
          <a href="#planscopy">Casos de Éxito</a>
          <a href="#contact" className="primary">Empieza ahora</a>
        </nav>
      </div>
    </header>
  );
}
