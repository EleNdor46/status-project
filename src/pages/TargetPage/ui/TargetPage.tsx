import { WirtualList } from "shared/ui/WirtualList/WirtualList";
import cls from "./TargetPage.module.scss";
import { memo, useEffect } from "react";
import { Theme } from "app/provider/themeProvider/lib/themeContext";
import { useTheme } from "shared/hooks/useTheme/useTheme";
import { Page } from "shared/ui/Page/Page";
import { TargetForm } from "features/TargetForm/ui/TargetForm";
import { healthTask } from "shared/variables/healtfTasks";
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
        <Page className={cls.TargetPage}>
            <TargetForm/>
            <WirtualList list={healthTask} className={cls.list} />
        </Page>
    );
});
