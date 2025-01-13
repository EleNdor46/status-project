import { classNames } from "shared/lib/classNames";
import cls from "./ProfileCard.module.scss";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getAuthData } from "entities/User";
import { getCompletedTaskData } from "entities/CompletedTask";
import { getTaskData } from "entities/Task";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = memo(({ className }: ProfileCardProps) => {
    const user = useSelector(getAuthData);
    const allTask = useSelector(getTaskData);
    const allCompletedTask = useSelector(getCompletedTaskData);

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.userName}>
                <h3>{user?.username}</h3>
            </div>
            <div className={cls.tasks}>
                <span>задач в процессе - {allTask.length}</span>
                <span>выполненых задач - {allCompletedTask.length}</span>
                <span>нынешняя серия дней - SOON...</span>
                <span> максимальная серия дней - SOON...</span>
            </div>
        </div>
    );
});
