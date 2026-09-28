const BENEFITS = [
  { title: 'Entrega rápida', text: 'Encontre opções de restaurantes e pratos de forma prática e rápida.' },
  { title: 'Variedade de restaurantes', text: 'Explore diferentes pratos e categorias disponíveis no GourmetOn.' },
  { title: 'Fácil de encontrar', text: 'Encontre pratos com facilidade usando busca e filtros.' },
  { title: 'Pagamento fácil', text: 'Uma experiência pensada para facilitar sua escolha e seu pedido.' },
]

function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-brand-orange font-semibold text-sm tracking-wide uppercase">Sobre o app</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-2 mb-4">
            O que é o GourmetOn?
          </h2>
          <p className="text-brand-dark/70 text-lg">
            O GourmetOn é um aplicativo de delivery de comida pensado para simplificar o seu dia:
            em poucos toques você descobre novos restaurantes, escolhe seu prato favorito e
            encontra tudo de forma prática e organizada.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              // Removido o text-center e adicionado text-left. Adicionado h-full para igualar alturas se necessário.
              className="bg-brand-cream rounded-xl p-6 text-left flex flex-col justify-center"
            >
              {/* O span do ícone foi completamente removido */}
              <h3 className="font-bold text-brand-dark mb-3 text-lg">{benefit.title}</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About