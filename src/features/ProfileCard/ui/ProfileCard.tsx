import { classNames } from "shared/lib/classNames";
import cls from "./ProfileCard.module.scss";
import { memo, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgressBar } from "shared/ui/CircularProgressBar/CircularProgressBar";
import { getAuthData } from "entities/User";
import { fetchTask } from "entities/Task/model/services/fetchTask";
import { fetchComletedTask } from "entities/CompletedTask";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = memo(({ className }: ProfileCardProps) => {
    const user = useSelector(getAuthData);
    const dispatch = useDispatch();
    // const getGolsCount = useMemo(() => {
    //     let result = 0;
    //     // result =
    //     //     Number(userGoals?.intellectGoals.length) +
    //     //     Number(userGoals?.sportGoals.length) +
    //     //     Number(userGoals?.targetGoals.length);
    //     return result;
    // }, [userGoals]);

    // const getCompletedGolsCount = useMemo(() => {
    //     let result = 0;
    //     // result =
    //     //     Number(userCompletedGoals?.completedIntellectGoals.length) +
    //     //     Number(userCompletedGoals?.completedSportGoals.length) +
    //     //     Number(userCompletedGoals?.completedTargetGoals.length);
    //     return result;
    // }, [userCompletedGoals]);

    const test = () => {
        dispatch(fetchTask());
        dispatch(fetchComletedTask());
    };

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.userName}>
                <h3>{user?.username}</h3>
            </div>
            <div className={cls.tasks}>
                <span>задач в процессе - {"!!"}</span>
                <span>выполненых задач - {"!!"}</span>
                <span>нынешняя серия дней - SOON...</span>
                <span> максимальная серия дней - SOON...</span>
                <CircularProgressBar value={55} />
                <button onClick={test}>312123</button>
            </div>
        </div>
    );
});
