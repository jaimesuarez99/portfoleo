import { ReactNode } from "react";

interface Props {
  iconClass?: string;
  title?: string;
  body?: string;
  children?: ReactNode;
  onButtonClick?: () => void;
}
const AboutItem = ({
  iconClass = "",
  title = "",
  body = "",
  children,
  onButtonClick,
}: Props) => {
  return (
    <>
      <li className="sidebar-item-wrapper" onClick={onButtonClick}>
        <span className={`item-icon ${iconClass}`}></span>
        <div>
          <h3 className="item-title">{title}</h3>
          <p className="item-body">{body}</p>
          {children}
        </div>
      </li>
    </>
  );
};

export default AboutItem;
