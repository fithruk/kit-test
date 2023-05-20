import { useDispatch } from 'react-redux';
import { CartItemsProps } from '../Store/reducers/cartReducer';
import StyledImgComponent from '../Img/Img';
import StyledTypography from '../Typography/Typography';
import BasketCounter from '../BasketCounter/BasketCounter';
import trash from '../../images/bi_trash.png';
import StyledButton from '../Button/Button';
import { removeProduct } from '../Store/actions/cartActions';
import { StyledBasketItemWrapper } from './StyledBasket';

// Компонент отдельного элемента корзины
const BasketItem = ({ title, id, price, count, imgUrl }: CartItemsProps) => {
  const dispatch = useDispatch();

  // Обработчик клика по кнопке удаления товара из корзины
  const handleClick = (id: number) => {
    dispatch(removeProduct(id)); // Диспатч действия для удаления товара из корзины
  };

  const total = +count * +price; // Общая стоимость товара

  return (
    <StyledBasketItemWrapper>
      {/* Изображение товара */}
      <div style={{ borderRadius: '9px' }}>
        <StyledImgComponent url={imgUrl} heigth="115px" width="115px" borderRadius="9px" />
      </div>
      {/* Название товара */}
      <StyledTypography size="16px" weight="700" tag="h3">
        {title}
      </StyledTypography>
      {/* Цена товара */}
      <StyledTypography size="16px" weight="700" tag="h3">
        ${price.toFixed(2)}
      </StyledTypography>
      {/* Счетчик количества товара */}
      <BasketCounter count={count} id={id} />
      {/* Общая стоимость товара */}
      <StyledTypography size="16px" weight="700" tag="h3">
        ${total.toFixed(2)}
      </StyledTypography>
      {/* Кнопка удаления товара */}
      <StyledButton onClick={() => handleClick(id)}>
        <StyledImgComponent url={trash} heigth="30px" width="25px" />
      </StyledButton>
    </StyledBasketItemWrapper>
  );
};

export default BasketItem;
