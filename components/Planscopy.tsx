const plans = [
  {
    title: 'NADEF Studio',
    image: '/images/nadef.png',
    features: ['visitar web']
  },
  {
    title: 'Siempre Patas - Cremación de Mascotas',
    image: '/images/siemprepatas.png',
    features: ['nadefstudio.tusitio.com.pe']
  },
  {
    title: 'Stilos Raquel - Salón de Belleza',
    image: '/images/stilosraquel.png',
    features: ['stilosraquel.tusitio.com.pe']
  },
  {
    title: 'Keila Vilela - Interprete de Lengua de Señas Peruana',
    image: '/images/keilavilela.png',
    features: [
      'keilalsp.tusitio.com.pe'
    ]
  },
];

export default function Plans() {
  return (
    <section id="planscopy" className="container plans">
      <h2>Nuestros Sitios</h2>
      <div className="plan-grid">
        {plans.map((p) => (
          <article className="plan-card" key={p.title}>
            <img src={p.image} alt={p.title}/>
            <h3>{p.title}</h3>
            <ul>
              {p.features.map((f)=> <li key={f}>{f}</li>)}
            </ul>
            <a className="button" href="https://siemprepatas.pe">Visitar web</a>
          </article>
        ))}
      </div>
    </section>
  );
}
