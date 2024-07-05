import Badge from "~/components/Badge";
const Header = () => {
  return (
    <>
      <article className="sidebar-header-wrapper">
        <div className="sidebar-img-wrapper">
          <img className="sidebar-profile-image" src="/jasb.png" />
        </div>
        <div className="sidebar-info">
          <h1 className="sidebar-title-name" title="Jaime Suarez">
            Jaime Suarez
          </h1>
          <Badge>Web Developer</Badge>
        </div>
      </article>
    </>
  );
};

export default Header;
