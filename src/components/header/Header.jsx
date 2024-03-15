const Header = ({ location }) => {
  return (
    <div className="mb-12">
      Your location is at{" "}
      <span className="font-bold">
        {location.name}, {location.country}
      </span>
    </div>
  );
};

export default Header;
