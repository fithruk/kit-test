import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  background?: string;
  borderRadius?: string;
  children: React.ReactNode;
  color?: string;
  width?: string;
  height?: string;
  padding?: string;
}
