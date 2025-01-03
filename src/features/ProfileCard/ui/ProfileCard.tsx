import { classNames } from "shared/lib/classNames";
import cls from "./ProfileCard.module.scss";
import { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import {
    getUserCompletedGoals,
    getUserGoals,
    getUsername,
} from "entities/User/model/selector/getUserData";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = memo(({ className }: ProfileCardProps) => {
    const userName = useSelector(getUsername);
    const userCompletedGoals = useSelector(getUserCompletedGoals);
    const userGoals = useSelector(getUserGoals);

    const getGolsCount = useMemo(() => {
        let result = 0;
        result =
            Number(userGoals?.intellectGoals.length) +
            Number(userGoals?.sportGoals.length) +
            Number(userGoals?.targetGoals.length);
        return result;
    }, [userGoals]);

    const getCompletedGolsCount = useMemo(() => {
        let result = 0;
        result =
            Number(userCompletedGoals?.completedIntellectGoals.length) +
            Number(userCompletedGoals?.completedSportGoals.length) +
            Number(userCompletedGoals?.completedTargetGoals.length);
        return result;
    }, [userCompletedGoals]);

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.userName}>
                <h3>{userName}</h3>
            </div>
            <div className={cls.tasks}>
                <span>задач в процессе - {getGolsCount}</span>
                <span>выполненых задач - {getCompletedGolsCount}</span>
                <span>нынешняя серия дней - SOON...</span>
                <span> максимальная серия дней - SOON...</span>
            </div>
        </div>
    );
});
