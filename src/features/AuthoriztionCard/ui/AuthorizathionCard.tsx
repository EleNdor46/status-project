import { classNames } from "shared/lib/classNames";
import cls from "./AuthorizathionCard.module.scss";
import { memo } from "react";
interface AuthorizathionCardProps {
    className?: string;
}

export const AuthorizathionCard = memo(
    ({ className }: AuthorizathionCardProps) => {
        return (
            <div
                className={classNames(cls.AuthorizathionCard, {}, [className])}
            ></div>
        );
    }
);
