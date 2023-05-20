import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../Store/actions/cartActions';
import { ProductProps } from './Product.props';
import Typography from '../Typography/Typography';
import { RootState } from '../Store/store';
import StyledImgComponent from '../Img/Img';
import StyledButton from '../Button/Button';
import { StyledProductBox } from './StyledProduct';

// Компонент товара
const Product = ({ title, price, imgUrl, id }: ProductProps) => {
  const dispatch = useDispatch(); // Хук useDispatch для отправки экшенов Redux
  const { cartItems } = useSelector((store: RootState) => store.cart); // Получение списка товаров в корзине из Redux хранилища
  const handleClick = (id: number) => {
    dispatch(addProduct(id)); // Обработчик клика по кнопке добавления товара в корзину
  };
  const added = cartItems.find(item => item.id === id); // Проверка, есть ли товар уже добавлен в корзину

  return (
    <StyledProductBox>
      <StyledImgComponent width="200px" heigth="200px" url={imgUrl} />{' '}
      {/* Компонент изображения товара */}
      <Typography tag="h3" size="16px" weight="700">
        {title} {/* Заголовок товара */}
      </Typography>
      <Typography tag="h3" size="19px" weight="300">
        ${price.toFixed(2)} {/* Цена товара */}
      </Typography>
      <StyledButton
        background="#e61949"
        borderRadius="14px"
        color="#eeeeee"
        onClick={() => handleClick(id)} // Обработчик клика по кнопке добавления в корзину
      >
        {added ? 'Added' : 'Add to Cart'}{' '}
        {/* Текст кнопки зависит от того, добавлен ли товар в корзину */}
      </StyledButton>
    </StyledProductBox>
  );
};

export default Product;
