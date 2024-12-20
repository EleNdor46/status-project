import { classNames } from "shared/lib/classNames";
import cls from "./ProfileCard.module.scss";
import { memo } from "react";
import { useUsers } from "../api/getUserProfileApi";
import { useSelector } from "react-redux";
import { getUserId } from "entities/User/model/selector/getUserData";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = memo(({ className }: ProfileCardProps) => {
    const userId = useSelector(getUserId);

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
