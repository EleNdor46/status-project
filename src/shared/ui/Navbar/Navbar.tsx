import { Link, useNavigate } from "react-router-dom";
import cls from "./Navbar.module.scss";
import { memo } from "react";
import WorkIcon from "shared/widgets/icon/person-workspace.svg";
import ArmsUpIcon from "shared/widgets/icon/person-arms-up.svg";
import JournalIcon from "shared/widgets/icon/journal-text.svg";
import ProfileIcon from "shared/widgets/icon/person-lines-fill.svg";
import { useTheme } from "shared/hooks/useTheme/useTheme";
import { Theme } from "app/provider/themeProvider/lib/themeContext";
import { useSelector } from "react-redux";
import { getUserId } from "entities/User/model/selector/getUserData";
interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const inited = useSelector(getUserId);

    const onHandleProfilePage = () => {
        if (inited) {
            navigate("/profile");
        } else {
            navigate("/authorization");
        }
        toggleTheme(Theme.DEFAULT);
    };

    const onHandleTragetPage = () => {
        navigate("/target");
        toggleTheme(Theme.TARGET);
    };
    const onHandleHealthPage = () => {
        navigate("/health");
        toggleTheme(Theme.HEALTH);
    };

    const onHandleIntellect = () => {
        navigate("/intellect");
        toggleTheme(Theme.INTELLECT);
    };

    return (
        <nav className={cls.Navbar}>
            <div className={cls.workItem} onClick={onHandleTragetPage}>
                <WorkIcon />
            </div>
            <div className={cls.sportItem} onClick={onHandleHealthPage}>
                <ArmsUpIcon />
            </div>
            <div className={cls.lesonsItem} onClick={onHandleIntellect}>
                <JournalIcon />
            </div>
            <div className={cls.profileItem} onClick={onHandleProfilePage}>
                <ProfileIcon />
            </div>
        </nav>
    );
});
