import React, { useState, useEffect } from "react";
import "./Theme.css";

// Define three preset themes. (Using hex values for all colors so that the color pickers work.)
const presets = {
  dark: {
    "--primary-bg": "#0f0f0f", 
    "--secondary-bg": "#1b1b1bd0",
    "--primary-text": "#ffffff",
    "--secondary-text": "#c4c2c2",
    "--main-color": "#00e77f",
  },
  light: {
    "--primary-bg": "#ffffff", 
    "--secondary-bg": "#c4c2c2",
    "--primary-text": "#0f0f0f",
    "--secondary-text": "#1b1b1bd0",
    "--main-color": "#00e77f",
  }
};

// List of all CSS custom properties you want to control.
const cssKeys = [
  "--primary-bg",
  "--secondary-bg",
  "--primary-text",
  "--secondary-text",
  "--main-color",
];

function ThemeCustomizer() {
  // Selected preset name. It will be "custom" if the user edits any color.
  const [selectedPreset, setSelectedPreset] = useState("dark");
  // Holds the current theme values (preset or custom).
  const [customTheme, setCustomTheme] = useState(presets.dark);
  // Controls the visibility of the theme settings panel.
  const [panelVisible, setPanelVisible] = useState(false);

  // When customTheme or selectedPreset change, apply the values to the document root
  useEffect(() => {
    Object.entries(customTheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    // Save the current state to localStorage so it persists between reloads.
    localStorage.setItem("selectedPreset", selectedPreset);
    localStorage.setItem("customTheme", JSON.stringify(customTheme));
  }, [customTheme, selectedPreset]);

  // On component mount, try to load a saved theme from localStorage
  useEffect(() => {
    const savedPreset = localStorage.getItem("selectedPreset");
    const savedTheme = localStorage.getItem("customTheme");
    if (savedPreset && presets[savedPreset]) {
      setSelectedPreset(savedPreset);
      setCustomTheme(presets[savedPreset]);
    } else if (savedTheme) {
      try {
        const theme = JSON.parse(savedTheme);
        setSelectedPreset("custom");
        setCustomTheme(theme);
      } catch (error) {
        console.error("Error parsing saved theme", error);
      }
    }
  }, []);

  // When a preset button is clicked, apply that preset
  const handlePresetSelect = (presetName) => {
    setSelectedPreset(presetName);
    setCustomTheme(presets[presetName]);
  };

  // When a user changes a color via the color picker, update that key.
  // Also, mark the theme as "custom."
  const handleColorChange = (key, newColor) => {
    setSelectedPreset("custom");
    setCustomTheme((prevTheme) => ({
      ...prevTheme,
      [key]: newColor,
    }));
  };

  return (
    <div className="theme-customizer">
      {/* Button (or icon) to toggle the settings panel */}
      <button
        className="theme-toggle-btn"
        onClick={() => setPanelVisible((prev) => !prev)}
        aria-label="Toggle theme settings"
      >
      ThemeCustomizer
      </button>
      {panelVisible && (
        <div className="theme-panel my-panal">
          <div className="preset-options">
            {Object.keys(presets).map((presetName) => (
              <button
                key={presetName}
                className={`preset-btn ${
                  selectedPreset === presetName ? "active" : ""
                }`}
                onClick={() => handlePresetSelect(presetName)}
              >
                {presetName.charAt(0).toUpperCase() + presetName.slice(1)}
              </button>
            ))}
          </div>
          <hr />
          <h4>Customize Colors</h4>
          <div className="custom-colors">
            {cssKeys.map((key) => (
              <div className="color-picker" key={key}>
                <label>
                  {key}
                  <input
                    type="color"
                    value={customTheme[key]}
                    onChange={(e) => handleColorChange(key, e.target.value)}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeCustomizer;
