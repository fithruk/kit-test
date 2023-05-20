import { BasketCounterProps } from './BasketCounter.props';
import StyledButton from '../Button/Button';
import { addOne, minusOne, removeProduct } from '../Store/actions/cartActions';
import { useDispatch } from 'react-redux';

// Компонент счетчика для корзины
const BasketCounter = ({ count, id }: BasketCounterProps) => {
  const dispatch = useDispatch();

  // Обработчик клика на кнопке
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    // Проверка текста кнопки для определения операции (увеличение или уменьшение)
    if (e.currentTarget.textContent === '+') {
      dispatch(addOne(id)); // Диспатч действия увеличения количества товара
    } else {
      dispatch(minusOne(id)); // Диспатч действия уменьшения количества товара
    }
  };

  // Если количество товара меньше 1, удаляем товар из корзины
  if (count < 1) {
    dispatch(removeProduct(id));
  }

  return (
    <>
      {/* Кнопка уменьшения количества */}
      <StyledButton
        onClick={e => handleClick(e, id)}
        background="#E61949"
        borderRadius="50%"
        color="#FFFFFF"
        width="25px"
        height="25px"
        padding="padding"
      >
        -
      </StyledButton>
      {/* Отображение количества товара */}
      <div>{count}</div>
      {/* Кнопка увеличения количества */}
      <StyledButton
        onClick={e => handleClick(e, id)}
        background="#E61949"
        borderRadius="50%"
        color="#FFFFFF"
        width="25px"
        height="25px"
        padding="padding"
      >
        +
      </StyledButton>
    </>
  );
};

export default BasketCounter;
