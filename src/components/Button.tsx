import { ReactNode } from "react";

interface Props {
  severity?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  children: ReactNode;
  onButtonClick: () => void;
}
const Button = ({ children, severity, onButtonClick }: Props) => {
  return (
    <button className={`btn btn-${severity}`} onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default Button;
