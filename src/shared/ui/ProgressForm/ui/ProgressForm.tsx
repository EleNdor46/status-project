import { classNames } from "shared/lib/classNames";
import cls from "./ProgressForm.module.scss";
import { memo } from "react";
import {
    CircularBarTheme,
    CircularProgressBar,
} from "shared/ui/CircularProgressBar/CircularProgressBar";
import { Input } from "shared/ui/Input/Input";

interface ProgressFormProps {
    className?: string;
    value?: number;
    onChange?: (value: string) => void;
    onClickBtn?:()=>void
}

export const ProgressForm = memo(
    ({ className, value, onChange ,onClickBtn }: ProgressFormProps) => {
        return (
            <div className={classNames(cls.ProgressForm, {}, [className])}>
                <div className={cls.ProgressBar}>
                    <CircularProgressBar
                        value={Number(value)}
                        theme={CircularBarTheme.TARGET_THEME}
                        size={260}
                    />
                </div>
                <div className={cls.inputBlock}>
                    <Input
                        type="text"
                        className={cls.input}
                        placeholder="Название задачи"
                        onChange={onChange}
                    />
                </div>
                <button className={cls.btn} onClick={onClickBtn}>Add</button>
            </div>
        );
    }
);
