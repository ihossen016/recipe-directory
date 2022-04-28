import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/mode-icon.svg";

// style
import "./ThemeSelector.css";

const themeColors = ["#58249c", "#249c6b", "#b70233"];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          onClick={toggleMode}
          alt="light/dark toggle icon"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>

      <div className="theme-buttons">
        {themeColors.map(color => (
          <div
            key={color}
            style={{ background: color }}
            onClick={() => changeColor(color)}
          />
        ))}
      </div>
    </div>
  );
}
