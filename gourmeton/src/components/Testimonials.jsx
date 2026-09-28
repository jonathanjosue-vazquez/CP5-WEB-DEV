// Depoimentos demonstrativos para a apresentação.
const TESTIMONIALS = [
  { name: 'Marina Alves', role: 'Cliente GourmetOn', text: 'Gostei da variedade de pratos e da facilidade para encontrar uma opção.' },
  { name: 'Rafael Souza', role: 'Cliente GourmetOn', text: 'A página é simples de usar e facilita a escolha do prato.' },
  { name: 'Beatriz Lima', role: 'Cliente GourmetOn', text: 'Gostei das informações mostradas nos cards e da organização da página.' },
]

// Pega as duas primeiras letras do nome para usar como "avatar" simples
function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
}

function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center mb-4">
          <span className="text-brand-orange font-semibold text-sm tracking-wide uppercase">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-2">
            O que dizem sobre o GourmetOn
          </h2>
        </div>
        <p className="text-center text-xs text-brand-dark/50 mb-12">
          * Depoimentos demonstrativos, criados para fins de apresentação acadêmica.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-xl p-7 border border-brand-dark/10">
              <p className="text-brand-dark/80 leading-relaxed mb-6">“{testimonial.text}”</p>
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-brand-orangeLight flex items-center justify-center text-sm font-bold text-brand-orangeDark">
                  {getInitials(testimonial.name)}
                </span>
                <div>
                  <p className="font-bold text-brand-dark text-sm">{testimonial.name}</p>
                  <p className="text-xs text-brand-dark/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
