import { classNames } from "shared/lib/classNames";
import cls from "./Page.module.scss";
import { memo, ReactNode } from "react";
interface PageProps {
    className?: string;
    children: ReactNode;
}

export const Page = memo(({ className, children }: PageProps) => {
    return <div className={classNames(cls.Page, {}, [className])}>{children}</div>;
});
