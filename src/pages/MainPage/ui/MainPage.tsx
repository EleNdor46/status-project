import { Counter } from "entities/Counter/ui/Counter";
import cls from "./MainPage.module.scss";
import { memo } from "react";
import { UserList } from "shared/ui/UserList/UserList";
interface MainPageProps {
    className?: string;
}

export const MainPage = memo(({ className }: MainPageProps) => {
    return (
        <div className={cls.MainPage}>
            <UserList />
        </div>
    );
});
