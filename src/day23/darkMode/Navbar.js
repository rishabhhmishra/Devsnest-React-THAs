import Toggle from "./Toggle";
import useDarkMode from "./useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="navbar">
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Navbar;
