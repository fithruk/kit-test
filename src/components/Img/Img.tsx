import styled from 'styled-components';
import { ImgComponentProps } from './Img.props';

const ImgComponent = ({ url, ...rest }: ImgComponentProps) => {
  return <img src={url} alt="alt" {...rest} />;
};

const StyledImgComponent = styled((props: ImgComponentProps) => <ImgComponent {...props} />)`
  object-fit: cover;
  max-width: 100%;
  vertical-align: middle;
  height: ${props => props.width};
  width: ${props => props.width};
  border-radius: ${props => props.borderRadius && props.borderRadius};
`;

export default StyledImgComponent;
