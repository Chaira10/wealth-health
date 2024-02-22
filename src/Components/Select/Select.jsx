// Importation du fichier CSS pour styliser le composant Select
import './Select.css'

// Définition du composant fonctionnel Select avec des props pour la configuration
function Select({ value, onChange, options, name, id, placeholder = "Choisissez..."  }) {
  // Rendu du composant Select
  return (
    // Élément select HTML avec des attributs pour la gestion des données et l'accessibilité
    <select name={name} id={id} value={value} onChange={onChange} className="inputs">
      {/* Option par défaut affichant le placeholder, désactivée et cachée une fois une option sélectionnée */}
      <option value="" disabled hidden>{placeholder}</option>
      {/* Génération des options du select à partir du tableau options passé en props */}
      {options.map((option) => (
        // Option individuelle avec une clé unique et la valeur correspondante
        <option key={option} value={option}>
          {option} {/* Affichage du texte de l'option */}
        </option>
      ))}
    </select>
  );
}

// Exportation du composant Select pour son utilisation dans d'autres parties de l'application
export default Select
