export interface TypographyProps {
  tag: 'h1' | 'h2' | 'h3';
  size: '16px' | '19px' | '31px';
  weight: '300' | '500' | '700';
  children: React.ReactNode;
  color?: string;
}
