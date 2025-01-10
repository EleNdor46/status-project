import { WirtualList } from "shared/ui/WirtualList/WirtualList";
import cls from "./IntellectPage.module.scss";
import { memo, useEffect } from "react";
import { Theme } from "app/provider/themeProvider/lib/themeContext";
import { useTheme } from "shared/hooks/useTheme/useTheme";
import { healthTask } from "shared/variables/healtfTasks";
interface IntellectPageProps {
    className?: string;
}

export const IntellectPage = memo(({ className }: IntellectPageProps) => {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        if (theme !== Theme.INTELLECT) {
            toggleTheme(Theme.INTELLECT);
        }
    }, []);

    return (
        <div className={cls.IntellectPage}>
            <WirtualList list={healthTask} />
        </div>
    );
});
