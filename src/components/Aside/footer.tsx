interface Props {
  buttonMap: Array<{
    url: string;
    iconClass: string;
    name: string;
  }>;
}
const Footer = ({ buttonMap }: Props) => {
  return (
    <>
      <div className="sidebar-social-media-wrapper">
        {buttonMap.map((item) => (
          <button
            className="social-media-button"
            onClick={() => window.open(item.url, "_blank")}
          >
            <span className={item.iconClass}></span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Footer;
