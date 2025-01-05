import { classNames } from "shared/lib/classNames";
import cls from "./ProgressForm.module.scss";
import { memo } from "react";
import {
    CircularBarTheme,
    CircularProgressBar,
} from "shared/ui/CircularProgressBar/CircularProgressBar";
interface ProgressFormProps {
    className?: string;
}

export const ProgressForm = memo(({ className }: ProgressFormProps) => {
    return (
        <div className={classNames(cls.ProgressForm, {}, [className])}>
            <div className={cls.ProgressBar}>
                <CircularProgressBar
                    value={10}
                    theme={CircularBarTheme.TARGET_THEME}
                    size={260}
                />
            </div>
            <div className={cls.inputBlock}>
                <input type="text" />
            </div>
        </div>
    );
});
