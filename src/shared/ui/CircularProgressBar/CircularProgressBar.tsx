import { classNames } from "shared/lib/classNames";
import cls from "./CircularProgressBar.module.scss";
import { Progress } from "antd";
import { memo } from "react";
interface CircularProgressBarProps {
    className?: string;
    value: number;
    theme?: CircularBarTheme;
    showInfo?: boolean;
    size?:number
}

export enum CircularBarTheme {
    INTELECT_THEME = "rgb(0, 137, 190)",
    HEALTH_THEME = "rgb(0, 214, 71)",
    TARGET_THEME = "#ff0000",
}

export const CircularProgressBar = memo(
    ({
        className,
        value,
        theme = CircularBarTheme.INTELECT_THEME,
        showInfo = true,
        size
    }: CircularProgressBarProps) => {
        return (
            <div
                className={classNames(cls.CircularProgressBar, {}, [className])}
            >
                <Progress
                    type="circle"
                    percent={value}
                    showInfo={showInfo}
                    strokeColor={theme}
                    size={size}
                />
            </div>
        );
    }
);
