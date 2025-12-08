const plans = [
  {
    title: 'Profesionales',
    price: 'S/. 99',
    features: [
      'Página de aterrizaje',
      'Diseños atractivos',
      'Hosting 1 año gratis',
      'Dominio compartido',
      'SSL',
      'Protección DDOS'
    ],
  },
  {
    title: 'Emprendedores',
    price: 'S/. 199',
    features: [
      'Página de aterrizaje',
      'Diseños atractivos',
      'Hosting 1 año gratis',
      'Dominio compartido',
      'SSL',
      'Protección DDOS'
    ],
  },
  {
    title: 'Empresas',
    price: 'S/. 299',
    features: [
      'Página de aterrizaje',
      'Diseños atractivos',
      'Hosting 1 año gratis',
      'Dominio compartido',
      'SSL',
      'Protección DDOS'
    ],
  }
];

export default function Plans() {
  return (
    <section id="plans" className="container plans">
      <h2>Nuestros planes</h2>
      <div className="plan-grid">
        {plans.map((p) => (
          <article className="plan-card" key={p.title}>
            <h3>{p.title}</h3>
            <p className="price">{p.price}</p>
            <ul>
              {p.features.map((f)=> <li key={f}>{f}</li>)}
            </ul>
            <a className="button" href="#contact">Elegir Plan</a>
          </article>
        ))}
      </div>
    </section>
  );
}
