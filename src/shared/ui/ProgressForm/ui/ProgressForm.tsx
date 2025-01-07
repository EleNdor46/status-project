import { classNames } from "shared/lib/classNames";
import cls from "./ProgressForm.module.scss";
import { memo, useCallback } from "react";
import {
    CircularBarTheme,
    CircularProgressBar,
} from "shared/ui/CircularProgressBar/CircularProgressBar";
import { Input } from "shared/ui/Input/Input";
import { orderPage } from "shared/const/orderPage";
import { useDispatch } from "react-redux";

interface ProgressFormProps {
    className?: string;
    order: orderPage;
}

export const ProgressForm = memo(({ className, order }: ProgressFormProps) => {
    const dispatch = useDispatch();

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
                <Input
                    type="text"
                    className={cls.input}
                    placeholder="Название задачи"
                />
            </div>
        </div>
    );
});
