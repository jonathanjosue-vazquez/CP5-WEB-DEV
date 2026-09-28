import { useState } from 'react'

const INITIAL_FORM = { name: '', email: '', message: '' }

// Não existe backend neste projeto: o formulário valida os campos
// localmente e exibe uma mensagem de sucesso simulada, sem enviar
// os dados a nenhum servidor.
function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const newErrors = {}
    if (form.name.trim().length < 2) {
      newErrors.name = 'Informe seu nome completo.'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Informe um e-mail válido.'
    }
    if (form.message.trim().length < 10) {
      newErrors.message = 'Sua mensagem precisa ter ao menos 10 caracteres.'
    }
    return newErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true)
      setForm(INITIAL_FORM)
    }
  }

  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-xl mx-auto px-5">
        <div className="text-center mb-10">
          <span className="text-brand-orange font-semibold text-sm tracking-wide uppercase">Fale com a gente</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-2 mb-4">
            Receba novidades e promoções
          </h2>
          <p className="text-brand-dark/70">
            Deixe seu contato e fique por dentro das novidades do GourmetOn.
          </p>
        </div>

        {isSubmitted && (
          <div className="bg-green-50 border border-green-200 text-green-700 text-sm font-medium rounded-xl px-4 py-3 mb-6 text-center">
            Mensagem registrada com sucesso! Este formulário faz parte da demonstração acadêmica do projeto.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-1.5">
              Nome
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Seu nome completo"
              className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange transition-shadow ${
                errors.name ? 'border-red-400' : 'border-brand-dark/15'
              }`}
            />
            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-1.5">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="voce@email.com"
              className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange transition-shadow ${
                errors.email ? 'border-red-400' : 'border-brand-dark/15'
              }`}
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-1.5">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Como podemos ajudar?"
              className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange transition-shadow resize-none ${
                errors.message ? 'border-red-400' : 'border-brand-dark/15'
              }`}
            />
            {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-brand-orange hover:bg-brand-orangeDark text-white font-semibold py-3.5 rounded-xl transition-colors"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
