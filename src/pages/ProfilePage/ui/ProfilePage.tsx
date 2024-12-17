import { Theme } from "app/provider/themeProvider/lib/themeContext";
import { useTheme } from "shared/hooks/useTheme/useTheme";
import cls from "./ProfilePage.module.scss";
import { memo, useEffect } from "react";
import { Page } from "shared/ui/Page/Page";
import { ProfileCard } from "features/ProfileCard/ui/ProfileCard";
import { useParams } from "react-router-dom";
interface ProfilePageProps {
    className?: string;
}

export const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { theme, toggleTheme } = useTheme();
    const { id } = useParams();

    useEffect(() => {
        if (theme !== Theme.DEFAULT) {
            toggleTheme(Theme.DEFAULT);
        }
    }, []);

    return (
        <Page className={cls.ProfilePage}>
            
            <ProfileCard id={id} />
        </Page>
    );
});
