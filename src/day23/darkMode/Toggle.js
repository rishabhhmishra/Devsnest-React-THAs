const Toggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="dark-mode-toggle">
      <button onClick={() => setDarkMode(false)}>☀</button>
      <span className="toggle-control">
        <input
          type="checkbox"
          className="dmcheck"
          id="dmcheck"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <label htmlFor="dmcheck"></label>
      </span>
      <button onClick={() => setDarkMode(true)}>☾</button>
    </div>
  );
};

export default Toggle;
