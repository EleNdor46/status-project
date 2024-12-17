import { Task } from "entities/Task";
import cls from "./WirtualList.module.scss";
import { memo } from "react";
interface WirtualListProps {
    className?: string;
    list: Task[];
}

export const WirtualList = memo(({ className, list }: WirtualListProps) => {
    return (
        <div className={cls.WirtualList}>
            {list.map((item: Task) => (
                <div key={item.id} className={cls.item}>
                    <span> {item.lable} </span>
                </div>
            ))}
        </div>
    );
});
