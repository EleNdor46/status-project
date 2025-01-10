import { WirtualList } from "shared/ui/WirtualList/WirtualList";
import cls from "./HealthPage.module.scss";
import { memo, useEffect } from "react";
import { useTheme } from "shared/hooks/useTheme/useTheme";
import { Theme } from "app/provider/themeProvider/lib/themeContext";
import { healthTask } from "shared/variables/healtfTasks";
interface HealthPageProps {
    className?: string;
}

export const HealthPage = memo(({ className }: HealthPageProps) => {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        if (theme !== Theme.HEALTH) {
            toggleTheme(Theme.HEALTH);
        }
    }, []);

    return (
        <div className={cls.HealthPage}>
            <div className={cls.list}>
                <WirtualList list={healthTask} />
            </div>
        </div>
    );
});
