import BasketItem from '../BasketItem/BasketItem';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import StyledButton from '../Button/Button';
import StyledTypography from '../Typography/Typography';
import { BasketWrapper } from './StyledBasket';

// Компонент Корзины
const Basket = () => {
  // Получение данных о товарах в корзине из хранилища
  const { cartItems } = useSelector((store: RootState) => store.cart);

  // Вычисление общей стоимости товаров в корзине
  const total = cartItems.reduce((acc, item) => acc + item.count * item.price, 0);

  return (
    <BasketWrapper>
      {/* Отображение каждого товара в корзине */}
      {cartItems.map(item => (
        <BasketItem {...item} key={item.id} />
      ))}

      {/* Отображение общей стоимости */}
      <StyledTypography size="19px" tag="h3" weight="500" color="#FFFFFF">
        Total: $<strong>{total.toFixed(2)}</strong>
      </StyledTypography>

      {/* Кнопка "Proceed to Payment" */}
      <StyledButton background="#2F2E2E" borderRadius="9px" color="#FFFFFF">
        Proceed to Payment
      </StyledButton>
    </BasketWrapper>
  );
};

export default Basket;
