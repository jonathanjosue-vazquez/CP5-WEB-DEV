import FeatureCard from './FeatureCard'

const FEATURES = [
  { 
    title: 'Busca de pratos', 
    description: 'Pesquise exatamente o que lhe apetece comer hoje.' 
  },
  { 
    title: 'Categorias', 
    description: 'Filtre facilmente por tipo de refeição, acompanhamentos e bebidas.' 
  },
  { 
    title: 'Variedade', 
    description: 'Descubra um menu diversificado com sugestões para todos os gostos.' 
  },
  { 
    title: 'Informações', 
    description: 'Veja ingredientes, preços e detalhes relevantes num só relance.' 
  },
  { 
    title: 'Explorar pratos', 
    description: 'Navegue por especialidades de várias regiões e estilos culinários.' 
  },
  { 
    title: 'Origem dos pratos', 
    description: 'Conheça a história e as tradições culturais por trás de cada receita.' 
  },
]

function Features() {
  return (
    <section id="funcionalidades" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-brand-orange font-semibold text-sm tracking-wide uppercase">Funcionalidades</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-2">
            Recursos do GourmetOn
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features