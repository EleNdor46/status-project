import { classNames } from "shared/lib/classNames";
import cls from "./HealthList.module.scss";
import { memo } from "react";
import { WirtualList } from "shared/ui/WirtualList/WirtualList";
import { useSelector } from "react-redux";
import { getTaskData, taskType } from "entities/Task";
interface healthListProps {
    className?: string;
}

export const HealthList = memo(({ className }: healthListProps) => {
    const taskList = useSelector(getTaskData);
    const healthTaskList = taskList.filter(
        (task) => task.type === taskType.HEALTH
    );

    return (
        <>
            {healthTaskList ? (
                <WirtualList
                    className={classNames(cls.healthList, {}, [className])}
                    list={healthTaskList}
                />
            ) : (
                <span>Добавьте задачу</span>
            )}
        </>
    );
});
