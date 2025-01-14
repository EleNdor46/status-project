import { memo, useCallback, useEffect } from "react";
import { ProgressForm } from "shared/ui/ProgressForm/ui/ProgressForm";
import { useDispatch, useSelector } from "react-redux";
import { progressFormActions } from "entities/ProgressForm/model/slice/ProgressFormSlice";
import { targetFormActions } from "../model/slice/targetFormSlice";
import { getTargetFormValue } from "../model/selector/targetFormSelector";
import { getProgressFormTarget } from "entities/ProgressForm";
import { getTaskData } from "entities/Task";
import { getCompletedTaskData } from "entities/CompletedTask";
import { addTargetTask } from "../model/services/addTargetTask/addTargetTask";
import { CircularBarTheme } from "shared/ui/CircularProgressBar/CircularProgressBar";
interface TargetFormProps {
    className?: string;
}

export const TargetForm = memo(({ className }: TargetFormProps) => {
    const dispatch = useDispatch();
    const progressValue = useSelector(getTargetFormValue);
    const allTask = useSelector(getTaskData);
    const allCompletedTask = useSelector(getCompletedTaskData);
    const formValue = useSelector(getProgressFormTarget);
    useEffect(() => {
        dispatch(
            targetFormActions.getProgressValue({
                task: allTask,
                completedTask: allCompletedTask,
            })
        );
    }, [allTask, allCompletedTask, dispatch]);

    const handleChange = useCallback(
        (value: string) => {
            dispatch(progressFormActions.setTargetForm(value));
        },
        [dispatch]
    );

    const handleClick = useCallback(() => {
        if (!formValue) return null;
        dispatch(addTargetTask());
    }, [dispatch, formValue]);

    return (
        <ProgressForm
            onChange={handleChange}
            value={progressValue}
            onClickBtn={handleClick}
            theme={CircularBarTheme.TARGET_THEME}
        />
    );
});
