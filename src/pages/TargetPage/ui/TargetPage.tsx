import cls from "./TargetPage.module.scss"
import { memo } from "react"
interface TargetPageProps {
className?:string
}

export const TargetPage = memo(({className}:TargetPageProps) => {
return (
<div className={cls.TargetPage}>

</div>
 );
});