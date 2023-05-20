import { useSelector } from 'react-redux';
import { useState } from 'react';
import Basket from '../Basket/Basket';
import logo from '../../images/logo_1.png';
import cartIcon from '../../images/product_bascket.png';
import { RootState } from '../Store/store';
import { Counter, NavItem, NavList, StyledHeader, StyledNav } from './StyledNav';

// Компонент навигационного меню
const Navigation = () => {
  const { cartItems } = useSelector((store: RootState) => store.cart); // Получение списка товаров в корзине из Redux хранилища
  const [showBasket, setShowBasket] = useState<boolean>(false); // Состояние для отображения корзины

  return (
    <StyledHeader>
      {/* Логотип */}
      <div>
        <img src={logo} alt="logo" />
      </div>
      <StyledNav>
        <NavList>
          {/* Пункты меню */}
          <NavItem>
            <a href="#">Menu</a>
          </NavItem>
          <NavItem>
            <a href="#">About</a>
          </NavItem>
          <NavItem>
            <a href="#">Delivery</a>
          </NavItem>
          <NavItem
            onMouseEnter={() => setShowBasket(true)} // При наведении на пункт "Cart" отображается корзина
            onMouseLeave={() => setShowBasket(false)} // При уходе курсора из области пункта "Cart" корзина скрывается
          >
            <a href="#">Cart</a> <img src={cartIcon} alt="cart_icon" />
            {/* Отображение счетчика товаров в корзине, если есть товары */}
            {cartItems.length > 0 && (
              <Counter>{cartItems.reduce((acc, item) => acc + item.count, 0)}</Counter>
            )}
            {/* Отображение корзины, если showBasket равно true */}
            {showBasket && <Basket />}
          </NavItem>
        </NavList>
      </StyledNav>
    </StyledHeader>
  );
};

export default Navigation;
