// Recebe os dados de UM prato via props (já normalizados pelo foodApi.js)
// e apenas renderiza. Não sabe nada sobre fetch, API ou estado.
function FoodCard({ name, image, category, origin }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-brand-dark/10 group">
      <div className="aspect-square overflow-hidden bg-brand-orangeLight">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-brand-dark mb-1.5 truncate" title={name}>
          {name}
        </h3>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold bg-brand-orangeLight text-brand-orangeDark px-2.5 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs font-medium text-brand-dark/60">{origin}</span>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
