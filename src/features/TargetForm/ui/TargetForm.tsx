import { memo, useCallback, useEffect } from "react";
import { ProgressForm } from "shared/ui/ProgressForm/ui/ProgressForm";
import { useDispatch, useSelector } from "react-redux";
import { progressFormActions } from "entities/ProgressForm/model/slice/ProgressFormSlice";
import { targetFormActions } from "../model/slice/targetFormSlice";
import { getTargetFormValue } from "../model/selector/targetFormSelector";
import { getProgressFormTarget } from "entities/ProgressForm";
interface TargetFormProps {
    className?: string;
}

export const TargetForm = memo(({ className }: TargetFormProps) => {
    const dispatch = useDispatch();
    const progressValue = useSelector(getTargetFormValue);
    const taskTitle = useSelector(getProgressFormTarget);

    useEffect(() => {
        dispatch(targetFormActions.getProgressValue());
    }, []);

    const handleChange = useCallback(
        (value: string) => {
            dispatch(progressFormActions.setTargetForm(value));
        },
        [dispatch]
    );

    const handleClick = useCallback(() => {}, [dispatch]);

    return (
        <ProgressForm
            onChange={handleChange}
            value={progressValue}
            onClickBtn={handleClick}
        />
    );
});
