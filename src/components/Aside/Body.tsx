import AboutItem from "./AboutItem";

const Body = () => {
  return (
    <>
      <ul className="sidebar-body-list">
        <AboutItem
          iconClass="icon-mail"
          title="EMAIL"
          body="jaimesuarezb99@gmail.com"
        />
        <AboutItem
          iconClass="icon-phone"
          title="PHONE"
          body="+57 301 767 6969"
        />
        <AboutItem
          iconClass="icon-calendar"
          title="BIRTHDAY"
          body="April 6, 1999"
        />
        <AboutItem
          iconClass="icon-location"
          title="LOCATION"
          body="Medellín, Colombia"
        />
      </ul>
    </>
  );
};

export default Body;
