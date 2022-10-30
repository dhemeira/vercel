import { createContext, ReactElement, useEffect, useState } from 'react';

const MyThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

export function MyThemeContextProvider(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  useEffect(() => initialThemeHandler());

  function isLocalStorageEmpty() {
    return !localStorage.getItem('isDarkTheme');
  }

  function initialThemeHandler() {
    if (isLocalStorageEmpty()) {
      localStorage.setItem('isDarkTheme', `true`);
      setIsDarkTheme(true);
    } else {
      const isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'));
      if (isDarkTheme) document?.querySelector('body')?.setAttribute('data-theme', 'dark');
      else document?.querySelector('body')?.setAttribute('data-theme', 'light');
      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }
  }

  function toggleThemeHandler() {
    const isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'));
    setIsDarkTheme(!isDarkTheme);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  }

  function toggleDarkClassToBody() {
    if (isDarkTheme) document?.querySelector('body')?.setAttribute('data-theme', 'dark');
    else document?.querySelector('body')?.setAttribute('data-theme', 'light');
  }

  function setValueToLocalStorage() {
    localStorage.setItem('isDarkTheme', `${!isDarkTheme}`);
  }

  return (
    <MyThemeContext.Provider value={{ isDarkTheme: true, toggleThemeHandler }}>
      {props.children}
    </MyThemeContext.Provider>
  );
}

export default MyThemeContext;
