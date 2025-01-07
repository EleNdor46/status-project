import { classNames } from "shared/lib/classNames";
import cls from "./TargetForm.module.scss";
import { memo, useCallback, useEffect } from "react";
import { ProgressForm } from "shared/ui/ProgressForm/ui/ProgressForm";
import { useDispatch, useSelector } from "react-redux";
import { progressFormActions } from "entities/ProgressForm/model/slice/ProgressFormSlice";
import {
    targetFormActions,
    targetFormReducers,
} from "../model/slice/targetFormSlice";
import {
    getUserCompletedGoals,
    getUserGoals,
} from "entities/User/model/selector/getUserData";
import { getTargetFormValue } from "../model/selector/targetFormSelector";
interface TargetFormProps {
    className?: string;
}

export const TargetForm = memo(({ className }: TargetFormProps) => {
    const dispatch = useDispatch();
    const userGoal = useSelector(getUserGoals);
    const userCompletedGoal = useSelector(getUserCompletedGoals);
    const progressValue = useSelector(getTargetFormValue) 


    useEffect(() => {
        dispatch(
            targetFormActions.setTargetTasks({
                targetGoals: userGoal.targetGoals,
                completedTargetGoals: userCompletedGoal?.completedTargetGoals,
            })
        );
    }, []);
    useEffect(() => {
       dispatch(targetFormActions.getProgressValue())
    }, []);

    const handleChange = useCallback(
        (value: string) => {
            dispatch(progressFormActions.setTargetForm(value));
        },
        [dispatch]
    );

    return <ProgressForm onChange={handleChange} value={progressValue}/>;
});
