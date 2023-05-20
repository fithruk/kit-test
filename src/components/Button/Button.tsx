import styled from 'styled-components';
import { ButtonProps } from './ButtonProps';

const Button = ({ ...rest }: ButtonProps) => {
  return <button {...rest}></button>;
};

const StyledButton = styled((props: ButtonProps) => <Button {...props}>{props.children}</Button>)`
  background: ${props => (props.background ? props.background : 'transparent')};
  border-radius: ${props => props.borderRadius};
  height: ${props => props.height && props.height};
  width: ${props => props.width && props.width};
  padding: ${props => (props.padding ? '0' : '10px 20px')};
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 150%;
  color: ${props => props.color};
  cursor: pointer;
  border: none;
`;

export default StyledButton;
