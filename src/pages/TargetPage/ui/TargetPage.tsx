import { WirtualList } from "shared/ui/WirtualList/WirtualList";
import { healthTask } from "shared/variables/intellectTasks";
import cls from "./TargetPage.module.scss";
import { memo, useEffect } from "react";
import { Theme } from "app/provider/themeProvider/lib/themeContext";
import { useTheme } from "shared/hooks/useTheme/useTheme";
interface TargetPageProps {
    className?: string;
}

export const TargetPage = memo(({ className }: TargetPageProps) => {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        if (theme !== Theme.TARGET) {
            toggleTheme(Theme.TARGET);
        }
    }, []);

    return (
        <div className={cls.TargetPage}>
            <WirtualList list={healthTask} />
        </div>
    );
});
// export default TargetPage;
