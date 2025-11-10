import { useState, useEffect } from 'react';
import { updateCSSVariables } from './ThemeUtils';
import './Theme.scss';

function Theme() {
    // state for current theme, default set to light 
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    // derive isNight boolean from theme
    const isNight = theme === "dark";

    // toggle between light and dark themes
    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        window.dispatchEvent(new Event("themeChange"));
    };

    // update CSS variables and localStorage
    useEffect(() => {
        localStorage.setItem('theme', theme);
        updateCSSVariables(theme);
    }, [theme]);

    return (
        <div className="app-page">
            <div className="header-container">
                {/* theme toggle button */}
                <button className="theme-button" onClick={toggleTheme}>
                    <div className="daynight-button-background">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className={`daynight-color daynight-color-${i} ${isNight ? "night" : "day"}`}
                            />
                        ))}
                        <div className={`daynight-button-knob ${isNight ? "night" : "day"}`} />
                    </div>
                </button>
            </div>
            {/* app content */}
            <div className="app-content">
                <h1>
                    Switch to {isNight ? "daymode" : "nightmode"}.
                </h1>
            </div>
        </div>
    );
}

export default Theme;
