import { TypographyProps } from './Typography.props';
import styled from 'styled-components';

const Typography = ({ tag, children, ...rest }: TypographyProps) => {
  switch (tag) {
    case 'h1':
      return <h1 {...rest}>{children}</h1>;
    case 'h2':
      return <h2 {...rest}>{children}</h2>;
    case 'h3':
      return <h3 {...rest}>{children}</h3>;

    default:
      return <h1>{children}</h1>;
  }
};

const StyledTypography = styled((props: TypographyProps) => (
  <Typography {...props}>{props.children}</Typography>
))`
  margin: 10px 0;
  font-style: normal;
  font-weight: 600;
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  line-height: 150%;
  letter-spacing: 0.0275em;
  color: ${props => (props.color ? props.color : '#19191d')};
`;

export default StyledTypography;
