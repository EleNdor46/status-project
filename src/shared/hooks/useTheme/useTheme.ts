import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContenext,
} from "app/provider/themeProvider/lib/themeContext";
import { useContext } from "react";

interface UseThemeResult {
    toggleTheme: (theme: Theme) => void;
    theme: Theme;
}
export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContenext);

    const toggleTheme = (newTheme: Theme) => {
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme: theme || Theme.DEFAULT, toggleTheme };
}
