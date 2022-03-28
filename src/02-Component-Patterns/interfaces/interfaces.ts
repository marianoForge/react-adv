import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';
export interface Product {
  id: string;
  title: string;
  img?: string;
  className?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}
