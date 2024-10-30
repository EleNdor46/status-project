import cls from "./UserList.module.scss";
import { memo } from "react";
interface UserListProps {
    className?: string;
}

export const UserList = memo(({ className }: UserListProps) => {

    
    return <div className={cls.UserList}></div>;
});
