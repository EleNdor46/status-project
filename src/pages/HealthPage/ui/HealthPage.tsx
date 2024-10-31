import { WirtualList } from "shared/ui/WirtualList/WirtualList";
import cls from "./HealthPage.module.scss";
import { memo } from "react";
import { healthTask } from "shared/variables/intellectTasks";
interface HealthPageProps {
    className?: string;
}

export const HealthPage = memo(({ className }: HealthPageProps) => {
    return (
        <div className={cls.HealthPage}>
            <div className={cls.list} >  
                <WirtualList list={healthTask} />
            </div>
        </div>
    );
});
