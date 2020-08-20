import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Ingredients = (props) => {
  // Props est un objet (toujours) qui contient
  // tous les paramètres que reçoit notre composant.
  // ici je reçois donc un paramètre "list" que je peux
  // récupérer dans l'objet props
  const { list } = props;
  return (
    <div className="ingredients">
      {
        list.map((ingredientObjet) => (
          <div key={ingredientObjet.id} className="ingredient">
            <span className="ingredient-quantity">
              {ingredientObjet.quantity} {ingredientObjet.unit}
            </span>
            <span className="ingredient-name">
              {ingredientObjet.name}
            </span>
          </div>
        ))
      }
    </div>
  );
};

Ingredients.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Ingredients;
