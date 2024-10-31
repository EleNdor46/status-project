import { WirtualList } from "shared/ui/WirtualList/WirtualList";
import cls from "./IntellectPage.module.scss";
import { memo } from "react";
import { healthTask } from "shared/variables/intellectTasks";
interface IntellectPageProps {
    className?: string;
}

export const IntellectPage = memo(({ className }: IntellectPageProps) => {
    return <div className={cls.IntellectPage}>
        <WirtualList list={healthTask} />
    </div>;
});
