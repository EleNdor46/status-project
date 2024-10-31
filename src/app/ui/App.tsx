import { memo } from "react";
import { AppRouting } from "app/provider/router/AppRouting";
import { Navbar } from "shared/ui/Navbar/Navbar";
import { useTheme } from "shared/hooks/useTheme/useTheme";
interface AppProps {
    className?: string;
}

export const App = memo(({ className }: AppProps) => {
    const { theme, toggleTheme } = useTheme();
    console.log(theme)
    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <AppRouting />
        </div>
    );
});
