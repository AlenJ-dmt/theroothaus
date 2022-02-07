import { FC } from "react";

interface IIconProps {
  size: string;
  color: string;
  onClick?: () => void;
}

export const CartIcon: FC<IIconProps> = ({ size, color, onClick }) => {
  return (
    <svg onClick={onClick} viewBox="0 0 24 24" height={size} width={size}>
      <path
        fill="none"
        stroke={color}
        strokeWidth="2"
        d="M4,7 L20,7 L20,23 L4,23 L4,7 Z M8,9 L8,5 C8,2.790861 9.79535615,1 12,1 L12,1 C14.209139,1 16,2.79535615 16,5 L16,9"
      ></path>
    </svg>
  );
};
