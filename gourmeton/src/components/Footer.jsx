const SOCIALS = ['Instagram', 'Facebook', 'TikTok']

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white/80 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <p className="font-extrabold text-xl text-white mb-3">
            Gourmet<span className="text-brand-orange">On</span>
          </p>
          <p className="text-sm leading-relaxed">
            Seu restaurante favorito na palma da mão. Delivery de comida rápido,
            prático e com a variedade que você precisa.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Navegação</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-brand-orange transition-colors">Sobre</a></li>
            <li><a href="#funcionalidades" className="hover:text-brand-orange transition-colors">Funcionalidades</a></li>
            <li><a href="#pratos" className="hover:text-brand-orange transition-colors">Pratos</a></li>
            <li><a href="#contato" className="hover:text-brand-orange transition-colors">Contato</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Contato</p>
          <ul className="space-y-2 text-sm">
            <li>contato@gourmeton.exemplo</li>
            <li>(11) 0000-0000</li>
            <li>São Paulo, SP</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Redes sociais</p>
          <ul className="space-y-2 text-sm">
            {SOCIALS.map((social) => (
              <li key={social} className="cursor-default" title={`${social} (demonstrativo)`}>
                {social}
              </li>
            ))}
          </ul>
          <p className="text-xs text-white/40 mt-3">* links demonstrativos para fins acadêmicos</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>© {year} GourmetOn. Projeto acadêmico — todos os direitos reservados.</p>
        <p className="hover:text-white/80 cursor-default">Termos de uso · Política de privacidade</p>
      </div>
    </footer>
  )
}

export default Footer
