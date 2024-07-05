import { ReactNode } from "react";

interface Pros {
  children: ReactNode;
  isVisible?: boolean;
  onButtonClick: () => void;
}

const Alert = ({ children, isVisible = false, onButtonClick }: Pros) => {
  return (
    isVisible && (
      <>
        <div
          className="alert alert-primary"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>{children}</div>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onButtonClick}
          ></button>
        </div>
      </>
    )
  );
};

export default Alert;
