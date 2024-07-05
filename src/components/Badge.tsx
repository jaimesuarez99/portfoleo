import { ReactNode } from "react";

interface Props {
  color?: "primary" | "secondary";
  children: ReactNode;
  onButtonClick?: () => void;
}
const Badge = ({ children, color, onButtonClick }: Props) => {
  return (
    <button
      className={`badge${color ? ` badge-${color}` : ""}`}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

export default Badge;
