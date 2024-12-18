import { classNames } from "shared/lib/classNames";
import cls from "./NotFoundPage.module.scss";
import { memo, useEffect } from "react";
import { Page } from "shared/ui/Page/Page";
import { Theme } from "app/provider/themeProvider/lib/themeContext";
import { useTheme } from "shared/hooks/useTheme/useTheme";
interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
    const { theme, toggleTheme } = useTheme();
    useEffect(() => {
        if (theme !== Theme.DEFAULT) {
            toggleTheme(Theme.DEFAULT);
        }
    }, []);

    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            Такой страницы нет
        </Page>
    );
});