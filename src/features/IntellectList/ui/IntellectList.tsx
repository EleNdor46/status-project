import { classNames } from "shared/lib/classNames";
import cls from "./IntellectList.module.scss";
import { memo } from "react";
import { WirtualList } from "shared/ui/WirtualList/WirtualList";
import { useSelector } from "react-redux";
import { getTaskData, taskType } from "entities/Task";
interface intellectListProps {
    className?: string;
}

export const IntellectList = memo(({ className }: intellectListProps) => {
    const taskList = useSelector(getTaskData);
    const intellectTaskList = taskList.filter(
        (task) => task.type === taskType.INTELLECT
    );

    return (
        <>
            {intellectTaskList ? (
                <WirtualList
                    className={classNames(cls.intellectList, {}, [className])}
                    list={intellectTaskList}
                />
            ) : (
                <span>Добавьте задачу</span>
            )}
        </>
    );
});
