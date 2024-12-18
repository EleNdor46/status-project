import { classNames } from "shared/lib/classNames";
import cls from "./ProfileCard.module.scss";
import { memo } from "react";
import { useUsers } from "../api/getUserProfileApi";

interface ProfileCardProps {
    className?: string;
    id?: string;
}

export const ProfileCard = memo(({ className, id = "1" }: ProfileCardProps) => {
    const { isLoading, error, data } = useUsers(id);

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.userName}>
                <h3>EleNdor</h3>
            </div>
            <div className={cls.tasks}>
                <span>задач в процессе - 12</span>
                <span>выполненых задач - 40</span>
                <span>нынешняя серия дней - 2</span>
                <span> максимальная серия дней - 12</span>
            </div>
        </div>
    );
});
