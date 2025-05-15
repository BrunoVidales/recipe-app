import { dietsList } from '../../data';
import useDietCheckbox from '../../hooks/useDietCheckbox';
import useIngredientInput from '../../hooks/useIngredientInput';

import './Form.scss';

export const Form = () => {

  const { ingredients, handleChangeInput } = useIngredientInput();
  const { selectDiets, handleChangeCheckbox } = useDietCheckbox();
  
  

  return (
    <section className='spacing'>
        <h2>What do you want to cook today?</h2>
        <form className='form'>
            <div className='form__ingredients'>
                <input 
                  className='form__field' 
                  name='ingredient'
                  type="text" 
                  placeholder='Enter Ingredients...'
                  value={ingredients.ingredient}
                  onChange={handleChangeInput}  
                />
                <p>Enter ingredients separated by commas (example: tomato, onion, garlic)</p>
            </div>

            <div>
              {dietsList.map(diet => (
                <div key={diet}>
                  <label htmlFor={diet}>{diet}</label>
                  <input 
                    id={diet} 
                    type="checkbox" 
                    checked={selectDiets[diet].checked} 
                    disabled={selectDiets[diet].disabled} 
                    onChange={() => handleChangeCheckbox(diet)} 
                  />
                </div>  
              ))}
            </div>

            <button 
              className='form__find'
              type='submit' 
            >
              Find Recipe
            </button>
        </form>
    </section>
  );
};
