## Theme Switching Button
A minimal theme toggle built with React and SCSS. Switches between day and night color palettes using dynamic CSS variables and a reusable ThemeUtils system.

![Theme Switcher Preview](https://github.com/Van-Ma/theme-switcher/raw/main/Group%2014%20(2).png)

## Features
- Smooth toggle between **light** and **dark** themes  
- Dynamically updates CSS variables for color schemes  
- Remembers the user’s last selected theme in `localStorage`  
- Pure React + SCSS, no external dependencies  
- Easily customizable color layers and transitions

## Custom colors 
```
export const backgroundColors = [
  { theme: 'light', color: '#ddddddff' },
  { theme: 'dark', color: '#2b2b2bff' },
]; ```
