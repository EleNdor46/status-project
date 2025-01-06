import { classNames } from "shared/lib/classNames";
import cls from "./ProgressForm.module.scss";
import { memo, useCallback } from "react";
import {
    CircularBarTheme,
    CircularProgressBar,
} from "shared/ui/CircularProgressBar/CircularProgressBar";
import { Input } from "shared/ui/Input/Input";
import { useParams } from "react-router-dom";
import { orderPage } from "shared/const/orderPage";
import { useDispatch, useSelector } from "react-redux";
import {
    getProgressFormHealth,
    getProgressFormIntellect,
    getProgressFormTarget,
} from "../model/selector/progressFormSelectors";
interface ProgressFormProps {
    className?: string;
    order: orderPage;
}

export const ProgressForm = memo(({ className, order }: ProgressFormProps) => {
    const dispatch = useDispatch();



    if (order === orderPage.TARGET_PAGE) {
        const targetForm = useSelector(getProgressFormTarget);
    }
    if (order === orderPage.INTELLECT_PAGE) {
        const intellectForm = useSelector(getProgressFormIntellect);
    }
    if (order === orderPage.HEALTH_PAGE) {
        const healthForm = useSelector(getProgressFormHealth);
    }

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
