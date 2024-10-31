import { createContext } from "react";

export enum Theme {
    DEFAULT = "app_default_theme",
    TARGET = "app_target_theme",
    HEALTH = 'app_health_theme',
    INTELLECT = 'app_intellect_theme',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}
export const ThemeContenext = createContext<ThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = "theme";