import { WirtualList } from "shared/ui/WirtualList/WirtualList";
import { healthTask } from "shared/variables/intellectTasks";
import cls from "./TargetPage.module.scss";
import { memo } from "react";
interface TargetPageProps {
    className?: string;
}

export const TargetPage = memo(({ className }: TargetPageProps) => {
    return <div className={cls.TargetPage}>
        <WirtualList list={healthTask} />
    </div>;
});
