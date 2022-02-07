import { FC } from "react";

interface IIconProps {
  color: string;
  size: string;
  onClick?: () => void;
}

export const CloseIcon: FC<IIconProps> = ({ color, size, onClick }) => {
  return (
    <div onClick={onClick}>
      <svg viewBox="0 0 24 24" height={size} width={size}>
        <path stroke={color} strokeWidth="1" d="M3,3 L21,21 M3,21 L21,3"></path>
      </svg>
    </div>
  );
};
