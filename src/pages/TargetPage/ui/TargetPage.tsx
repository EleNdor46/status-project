import { WirtualList } from "shared/ui/WirtualList/WirtualList";
import { healthTask } from "shared/variables/intellectTasks";
import cls from "./TargetPage.module.scss";
import { memo, useEffect } from "react";
import { Theme } from "app/provider/themeProvider/lib/themeContext";
import { useTheme } from "shared/hooks/useTheme/useTheme";
import { Page } from "shared/ui/Page/Page";
import { ProgressForm } from "shared/ui/ProgressForm/ui/ProgressForm";
import { orderPage } from "shared/const/orderPage";
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
            <ProgressForm order={orderPage.TARGET_PAGE} />
            <WirtualList list={healthTask} className={cls.list} />
        </Page>
    );
});
