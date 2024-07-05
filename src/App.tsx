import { Route, Routes } from "react-router-dom";
import SideBar from "./components/Aside/SideBar";
import Content from "./components/Content";
import { About } from "./About";
import { Resume } from "./Resume";
function App() {
  return (
    <>
      <SideBar />
      <Content>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="*" element={<h1>Not Found</h1>}></Route>
        </Routes>
      </Content>
    </>
  );
}

export default App;
