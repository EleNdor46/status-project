import cls from "./IntellectPage.module.scss";
import { memo } from "react";
interface IntellectPageProps {
    className?: string;
}

export const IntellectPage = memo(({ className }: IntellectPageProps) => {
    return <div className={cls.IntellectPage}></div>;
});
