import Header from "./Header";
import Divider from "../Divider";
import Body from "./Body";
import Footer from "./footer";
const SideBar = () => {
  const socialMediaMap = [
    {
      url: "https://www.instagram.com/s_jaime234/",
      iconClass: "icon-instagram",
      name: "Instagram",
    },
    {
      url: "https://github.com/jaimesuarez99",
      iconClass: "icon-github",
      name: "GitHub",
    },
    {
      url: "https://www.linkedin.com/in/jaime-alberto-su%C3%A1rez-6504b8271/",
      iconClass: "icon-linkedin",
      name: "Linkedin",
    },
  ];

  return (
    <aside className="sidebar">
      <Header></Header>
      <Divider />
      <Body />
      <Divider />
      <Footer buttonMap={socialMediaMap} />
    </aside>
  );
};

export default SideBar;
