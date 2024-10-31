import axios from "axios";
import cls from "./UserList.module.scss";
import { memo, useEffect, useState } from "react";
import { User } from "entities/User";
interface UserListProps {
    className?: string;
}

export const UserList = memo(({ className }: UserListProps) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/users").then((res) => {
            console.log(res.data);
            setUsers(res.data);
        });
    }, []);

    const handleDelete = (id: string) => {
        const newUsers = users.filter((user: User) => user.id !== id);
        setUsers(newUsers)
    };

    return (
        <div className={cls.UserList}>
            {users.length > 0 &&
                users.map((user: User) => (
                    <div key={user.id} className={cls.item}>
                        <button
                            className={cls.delete}
                            onClick={() => handleDelete(user.id)}
                        >
                            delete
                        </button>
                        <span>{user.username}</span>
                    </div>
                ))}
            <button>Добавить</button>
        </div>
    );
});
