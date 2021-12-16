import ingredientStyles from './burger-ingredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients() {
  return (
    <div className={ingredientStyles.burger__tabs}>
      <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
      <ul className={ingredientStyles.burger__nav}>
        <li>
          <Tab>
            Булки
          </Tab>
        </li>
        <li>
          <Tab>
            Соусы
          </Tab>
        </li>
        <li>
          <Tab>
            Начиники
          </Tab>
        </li>
      </ul>
    </div>
  )
}

export default BurgerIngredients;