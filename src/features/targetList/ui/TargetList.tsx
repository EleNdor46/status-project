import { classNames } from "shared/lib/classNames";
import cls from "./targetList.module.scss";
import { memo } from "react";
import { WirtualList } from "shared/ui/WirtualList/WirtualList";
import { useSelector } from "react-redux";
import { getTaskData, taskType } from "entities/Task";
interface targetListProps {
    className?: string;
}

export const TargetList = memo(({ className }: targetListProps) => {
    const taskList = useSelector(getTaskData);
    const targetTaskList = taskList.filter(
        (task) => task.type === taskType.TARGET
    );

    return (
        <>
            {targetTaskList ? (
                <WirtualList
                    className={classNames(cls.targetList, {}, [className])}
                    list={targetTaskList}
                />
            ) : (
                <span>Добавьте задачу</span>
            )}
        </>
    );
});
