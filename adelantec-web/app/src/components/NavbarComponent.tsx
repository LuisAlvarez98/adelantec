import Logo from "../images/logo.png";

const NavbarComponent = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          backgroundColor: "#6fa8fe",
          width: "100%",
          height: "30px",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></div>
      <img
        src={Logo}
        height="128"
        width="128"
        style={{ marginLeft: "auto", marginRight: "auto", zIndex: 9 }}
      />
    </div>
  );
};

export default NavbarComponent;
