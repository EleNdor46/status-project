import cls from "./ProfilePage.module.scss";
import { memo } from "react";
interface ProfilePageProps {
    className?: string;
}

export const ProfilePage = memo(({ className }: ProfilePageProps) => {
    return <div className={cls.ProfilePage}>ProfilePage</div>;
});
