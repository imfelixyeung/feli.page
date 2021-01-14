import useLocalStorage from "../hooks/useLocalStorage";
import { darkTheme, lightTheme } from "../theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { createContext, useContext, useEffect } from "react";
import useDarkMode from "use-dark-mode";

enum Theme {
    Dark = "dark",
    Light = "light",
}

const FeliThemeContext = createContext<any>({});

const defaultTheme = Theme.Dark;

export const ThemeContextProvider = ({ children }) => {
    const [storageTheme, setStorageTheme] = useLocalStorage(
        "theme",
        defaultTheme
    );

    const darkMode = useDarkMode(storageTheme === Theme.Dark);

    useEffect(() => {
        setStorageTheme(darkMode.value ? Theme.Dark : Theme.Light);
    }, [darkMode.value]);

    const toggle = () => {
        darkMode.value ? darkMode.disable() : darkMode.enable();
    };

    return (
        <FeliThemeContext.Provider
            value={{ darkMode, toggle, isDark: darkMode.value }}
        >
            {children}
        </FeliThemeContext.Provider>
    );
};
export const useFeliTheme = () => useContext(FeliThemeContext);

export const InjectMuiTheme = ({ children }) => {
    const { isDark } = useFeliTheme();
    const theme = isDark ? darkTheme : lightTheme;
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
