// background colors
export const backgroundColors = [
    { theme: 'light', color: '#ddddddff' },
    { theme: 'dark', color: '#2b2b2bff' },
];

// primary font colors
export const primaryFont = [
    { theme: 'light', color: 'black' },
    { theme: 'dark', color: 'white' },
];

// button colors
export const buttonColor = [
    { theme: 'light', color: '#F8E1A2' },
    { theme: 'dark', color: '#EDEDED' },
];

// accent colors
export const accentColors = [
    { theme: 'light', color: 'red' },
    { theme: 'dark', color: 'blue' },
];

// default theme
export const defaultTheme = 'light';

// get color value
export function getThemeColor(theme, colorArray) {
    const colorMapping = colorArray.find(item => item.theme === theme);
    // fallback to default theme if not found
    return colorMapping ? colorMapping.color : getThemeColor(defaultTheme, colorArray);
}

// update CSS variables dynamically for current theme
export function updateCSSVariables(theme) {
    document.documentElement.style.setProperty('--background-color', getThemeColor(theme, backgroundColors));
    document.documentElement.style.setProperty('--primary-font', getThemeColor(theme, primaryFont));
    document.documentElement.style.setProperty('--button-color', getThemeColor(theme, buttonColor));
}

// validate if a given theme exists
export function isValidTheme(theme) {
    const validThemes = [...backgroundColors, ...primaryFont, ...buttonColor].map(item => item.theme);
    return validThemes.includes(theme);
}

export const themes = {
    backgroundColors,
    primaryFont,
    buttonColor,
};
