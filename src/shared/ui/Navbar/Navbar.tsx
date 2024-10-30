import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";
import { memo } from "react";
interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    return (
        <div className={cls.Navbar}>
            <Link to={"/"} className={cls.item}>
                Home
            </Link>
            <Link to={"/profile"} className={cls.item}>
                Profile
            </Link>
        </div>
    );
});
