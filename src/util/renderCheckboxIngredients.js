import React, { useState } from 'react';
import Proptypes from 'prop-types';
import '../PagesCss/Checkbox.css';

export default function RenderCheckboxIngredients({ ingredients, measure }) {
  const [value, setValue] = useState(false);

  return (
    <>
      { ingredients.map((item, index) => {
        if (item !== '') {
          let name = `${item}`;
          if (measure[index] !== '' && measure[index] !== null) {
            name = `${name} - ${measure[index]}`;
          }
          return (
            <div key={ name }>
              <label htmlFor="ingredient">
                {name}
                <input
                  name="ingredient"
                  checked={ value }
                  onChange={ () => setValue(!value) }
                  type="checkbox"
                  data-testid={ `${index}-ingredient-step` }
                />
              </label>
            </div>
          );
        }
        return '';
      })}
    </>
  );
}

RenderCheckboxIngredients.propTypes = {
  ingredients: Proptypes.arrayOf(Proptypes.string),
  measure: Proptypes.arrayOf(Proptypes.string),
}.isRequired;
