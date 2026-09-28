function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-40 md:pb-24 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <p className="text-brand-orange font-semibold text-sm tracking-wide uppercase mb-4">
            Delivery de comida
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight mb-5">
            Encontre seu próximo prato no <span className="text-brand-orange">GourmetOn</span>
          </h1>

          <p className="text-brand-dark/70 text-lg mb-8 max-w-md mx-auto md:mx-0">
            Explore diferentes opções de pratos e encontre informações sobre cada uma delas em poucos cliques.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#pratos"
              className="bg-brand-orange hover:bg-brand-orangeDark text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Ver pratos disponíveis
            </a>
            <a
              href="#funcionalidades"
              className="bg-white hover:bg-brand-orangeLight text-brand-dark font-semibold px-8 py-3 rounded-full border border-brand-dark/10 transition-colors"
            >
              Conhecer funcionalidades
            </a>
          </div>
        </div>

        <div className="aspect-square max-w-md mx-auto w-full rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
            alt="Prato de comida pronto para delivery"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
