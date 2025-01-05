import { Task } from "entities/Task";
import cls from "./WirtualList.module.scss";
import { memo } from "react";
import { classNames } from "shared/lib/classNames";
interface WirtualListProps {
    className?: string;
    list: Task[];
}

export const WirtualList = memo(({ className, list }: WirtualListProps) => {
    return (
        <div className={classNames(cls.WirtualList, {}, [className])}>
            {list.map((item: Task) => (
                <div key={item.id} className={cls.item}>
                    <span> {item.lable} </span>
                </div>
            ))}
        </div>
    );
});
