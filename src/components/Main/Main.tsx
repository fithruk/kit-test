import { useEffect } from 'react';
import StyledTypography from '../Typography/Typography';
import { loadProducts } from '../Store/actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import Product from '../Product/Product';
import { ContentWrapper, StyledContentWrapper, StyledMain } from './StyledMain';
import { getUserCardFromStorage } from '../Storage/localStorage';
import { CartItemsProps } from '../Store/reducers/cartReducer';
import { setCartFromStorage } from '../Store/actions/cartActions';

// Компонент главной страницы
const Main = () => {
  const { products } = useSelector((store: RootState) => store); // Получение списка продуктов из Redux хранилища
  const dispatch = useDispatch();

  // Загрузка продуктов при монтировании компонента
  useEffect(() => {
    dispatch(loadProducts()); // Диспатч действия для загрузки продуктов

    // Получение данных о корзине из localStorage при наличии
    const userCard = getUserCardFromStorage();
    if (userCard) {
      const cartArr: CartItemsProps[] = JSON.parse(userCard);
      dispatch(setCartFromStorage(cartArr)); // Диспатч действия для установки корзины из localStorage
    }
  }, []);

  return (
    <StyledMain>
      {/* Заголовок */}
      <StyledTypography tag="h1" size="31px" weight="500">
        Products
      </StyledTypography>
      <StyledContentWrapper>
        {/* Блок фильтров */}
        <div
          style={{
            width: '25vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <StyledTypography tag="h1" size="31px" weight="500">
            Filters should be here
          </StyledTypography>
        </div>
        <ContentWrapper>
          {/* Отображение списка продуктов */}
          {products.productsArr.map(item => (
            <Product key={item.id} {...item} />
          ))}
        </ContentWrapper>
      </StyledContentWrapper>
    </StyledMain>
  );
};

export default Main;
