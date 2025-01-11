import cls from "./HealthPage.module.scss";
import { memo, useEffect } from "react";
import { useTheme } from "shared/hooks/useTheme/useTheme";
import { Theme } from "app/provider/themeProvider/lib/themeContext";
import { Page } from "shared/ui/Page/Page";
import { HealthForm } from "features/healthForm";
import { HealthList } from "features/healthList/ui/HealthList";
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
        <Page className={cls.HealthPage}>
            <HealthForm />
            <HealthList className={cls.list} />
        </Page>
    );
});
