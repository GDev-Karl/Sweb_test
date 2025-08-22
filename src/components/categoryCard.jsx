/**
   * Composante de carte qui affiche les informations d'une carte sur l'écran de boutique.
   * * @component
   * @param {Array} props.category - Ensemble de données de toutes les catégories
   * @param {Function} props.onClick  - Fonction appelée lors du clic sur la carte
   * @param {Function} props.isSelected  - Fonction appelée lors de la selection de la carte
   * @returns 
*/

const CategoryCard = ({ category, onClick, isSelected }) => (
    <div
        onClick={() => onClick(category)}
        className={`relative rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:scale-105 flex-shrink-0 w-full min-w-[120px] aspect-[4/5] mx-auto ${
            isSelected
                ? 'ring-4 ring-pink-500 scale-[0.98]'
                : 'hover:scale-[1.02]'
        }`}
    >
        {/* Image */}
        <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full">
            {/* Blur + tint layer */}
            <div className="absolute inset-x-0 bottom-0 top-0 h-15 sm:h-16 md:h-20 w-full bg-black/20 backdrop-blur-md" />

            {/* Gradient fade (top → transparent) */}
            <div className="absolute bottom-0 top-0 inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Category name */}
            <p className="relative text-white font-semibold text-sm sm:text-base opacity-90 whitespace-pre-line p-2.5 sm:p-2 overflow-hidden leading-tight">
                {category.name}
            </p>
        </div>
    </div>
);

export default CategoryCard;