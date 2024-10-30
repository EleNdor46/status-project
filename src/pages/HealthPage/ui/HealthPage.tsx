import cls from "./HealthPage.module.scss"
import { memo } from "react"
interface HealthPageProps {
className?:string
}

export const HealthPage = memo(({className}:HealthPageProps) => {
return (
<div className={cls.HealthPage}>

</div>
 );
});