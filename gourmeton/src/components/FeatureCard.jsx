// FeatureCard.jsx
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-brand-dark/10">
      {/* Renderização condicional: SÓ mostra a caixa se tiver um ícone */}
      {icon && (
        <div className="w-12 h-12 flex items-center justify-center bg-brand-cream-light rounded-xl mb-6 text-2xl">
          {icon}
        </div>
      )}

      {/* Se não houver ícone, o título começará mais acima */}
      <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default FeatureCard