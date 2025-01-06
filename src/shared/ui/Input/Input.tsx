import { classNames } from "shared/lib/classNames";
import cls from "./Input.module.scss";
import { memo } from "react";
interface InputProps {
    className?: string;
    type?: string;
    placeholder?: string;
    value?: number | string;
    onChange?: (value: string) => void;
}

export const Input = memo(
    ({
        className,
        type = "text",
        placeholder,
        value,
        onChange,
        ...otherProps
    }: InputProps) => {
        const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        };

        return (
            <input
                className={classNames(cls.input, {}, [className])}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onHandleChange(e)}
                {...otherProps}
            />
        );
    }
);
