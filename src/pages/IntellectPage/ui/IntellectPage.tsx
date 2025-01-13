import cls from "./IntellectPage.module.scss";
import { memo, useEffect } from "react";
import { Theme } from "app/provider/themeProvider/lib/themeContext";
import { useTheme } from "shared/hooks/useTheme/useTheme";
import { IntellectForm } from "features/intellectFrom";
import { IntellectList } from "features/IntellectList/ui/IntellectList";
import { Page } from "shared/ui/Page/Page";
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
        <Page className={cls.IntellectPage}>
            <IntellectForm />
            <IntellectList className={cls.list} />
        </Page>
    );
});
