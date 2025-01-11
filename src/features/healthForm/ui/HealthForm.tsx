import { memo, useCallback, useEffect } from "react";
import { ProgressForm } from "shared/ui/ProgressForm/ui/ProgressForm";
import { useDispatch, useSelector } from "react-redux";
import { progressFormActions } from "entities/ProgressForm/model/slice/ProgressFormSlice";
import { getTaskData } from "entities/Task";
import { getCompletedTaskData } from "entities/CompletedTask";
import { getHealthFormProgressValue } from "../model/selector/healthFormTaskSelector";
import { getProgressFormHealth } from "entities/ProgressForm";
import { healthFormActions } from "../model/slice/healthFormSlice";
import { addHealthTask } from "../model/services/addHealthTask";
import { CircularBarTheme } from "shared/ui/CircularProgressBar/CircularProgressBar";
interface HealthFormProps {
    className?: string;
}

export const HealthForm = memo(({ className }: HealthFormProps) => {
    const dispatch = useDispatch();
    const progressValue = useSelector(getHealthFormProgressValue);
    const allTask = useSelector(getTaskData);
    const allCompletedTask = useSelector(getCompletedTaskData);
    const formValue = useSelector(getProgressFormHealth);
    useEffect(() => {
        dispatch(
            healthFormActions.getProgressValue({
                task: allTask,
                completedTask: allCompletedTask,
            })
        );
    }, [allTask, allCompletedTask, dispatch]);

    const handleChange = useCallback(
        (value: string) => {
            dispatch(progressFormActions.setHealthForm(value));
        },
        [dispatch]
    );

    const handleClick = useCallback(() => {
        if (!formValue) return null;
        dispatch(addHealthTask());
    }, [dispatch, formValue]);

    return (
        <ProgressForm
            onChange={handleChange}
            value={progressValue}
            onClickBtn={handleClick}
            theme={CircularBarTheme.HEALTH_THEME}
        />
    );
});
