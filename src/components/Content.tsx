import { ReactNode } from "react";
import NavBar from "./NavBar";

interface Props {
  children?: ReactNode;
}

const Content = ({ children }: Props) => {
  return (
    <>
      <main className="main-content">
        <NavBar />
        {children}
      </main>
    </>
  );
};

export default Content;
