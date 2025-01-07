import { classNames } from "shared/lib/classNames";
import cls from "./ProgressForm.module.scss";
import { memo, useCallback } from "react";
import {
    CircularBarTheme,
    CircularProgressBar,
} from "shared/ui/CircularProgressBar/CircularProgressBar";
import { Input } from "shared/ui/Input/Input";
import { useDispatch } from "react-redux";

interface ProgressFormProps {
    className?: string;
    value?: number;
    onChange?: (value: string) => void;
}

export const ProgressForm = memo(
    ({ className, value, onChange }: ProgressFormProps) => {
        const dispatch = useDispatch();

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
            </div>
        );
    }
);
