const plans = [
  {
    title: 'NADEF Studio',
    price: 'S/. 99',
    image: '/images/nadef.png',
    features: ['Visitar web']
  },
  {
    title: 'Siempre Patas - Cremación de Mascotas',
    price: 'S/. 199',
    image: '/images/siemprepatas.png',
    features: ['Visitar web']
  },
  {
    title: 'Stilos Raquel - Salón de Belleza',
    price: 'S/. 299',
    image: '/images/stilosraquel.png',
    features: ['Visitar web']
  },
  {
    title: 'Keila Vilela - Interprete de Lengua de Señas Peruana',
    price: 'S/. 299',
    image: '/images/keilavilela.png',
    features: ['Visitar web']
  },
];

export default function Plans() {
  return (
    <section id="plans" className="container plans">
      <h2>Nuestros planes</h2>
      <div className="plan-grid">
        {plans.map((p) => (
          <article className="plan-card" key={p.title}>
            <img src={p.image} alt={p.title}/>
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
