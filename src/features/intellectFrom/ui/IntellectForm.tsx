import { memo, useCallback, useEffect } from "react";
import { ProgressForm } from "shared/ui/ProgressForm/ui/ProgressForm";
import { useDispatch, useSelector } from "react-redux";
import { progressFormActions } from "entities/ProgressForm/model/slice/ProgressFormSlice";
import { getTaskData } from "entities/Task";
import { getCompletedTaskData } from "entities/CompletedTask";
import { CircularBarTheme } from "shared/ui/CircularProgressBar/CircularProgressBar";
import { getIntellectFormProgressValue } from "../model/selector/intellectFormSelector";
import { getProgressFormIntellect } from "entities/ProgressForm";
import { intellectFormActions } from "../model/slice/intellectFormSlice";
import { addIntellectTask } from "../model/services/addIntellectTask";
interface HealthFormProps {
    className?: string;
}

export const IntellectForm = memo(({ className }: HealthFormProps) => {
    const dispatch = useDispatch();
    const progressValue = useSelector(getIntellectFormProgressValue);
    const allTask = useSelector(getTaskData);
    const allCompletedTask = useSelector(getCompletedTaskData);
    const formValue = useSelector(getProgressFormIntellect);
    useEffect(() => {
        dispatch(
            intellectFormActions.getProgressValue({
                task: allTask,
                completedTask: allCompletedTask,
            })
        );
    }, [allTask, allCompletedTask, dispatch]);

    const handleChange = useCallback(
        (value: string) => {
            dispatch(progressFormActions.setIntellectForm(value));
        },
        [dispatch]
    );

    const handleClick = useCallback(() => {
        if (!formValue) return null;
        dispatch(addIntellectTask());
    }, [dispatch, formValue]);

    return (
        <ProgressForm
            onChange={handleChange}
            value={progressValue}
            onClickBtn={handleClick}
            theme={CircularBarTheme.INTELECT_THEME}
        />
    );
});
