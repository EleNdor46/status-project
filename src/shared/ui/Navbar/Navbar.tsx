import { Link, useNavigate } from "react-router-dom";
import cls from "./Navbar.module.scss";
import { memo } from "react";
import WorkIcon from "shared/widgets/icon/person-workspace.svg";
import ArmsUpIcon from "shared/widgets/icon/person-arms-up.svg";
import JournalIcon from "shared/widgets/icon/journal-text.svg";
import ProfileIcon from "shared/widgets/icon/person-lines-fill.svg";
interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const navigate = useNavigate();
    const onHandleProfilePage = () => {
        navigate("/profile");
    };

    const onHandleTragetPage = () => {
        navigate("/target");
    };
    const onHandleHealthPage = () => {
        navigate("/health");
    };

    const onHandleIntellect = () => {
        navigate("/intellect");
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
