import { Counter } from "entities/Counter/ui/Counter";
import cls from "./MainPage.module.scss";
import { memo } from "react";
interface MainPageProps {
    className?: string;
}

export const MainPage = memo(({ className }: MainPageProps) => {
    return <div className={cls.MainPage}>
        <Counter></Counter>
    </div>;
});
