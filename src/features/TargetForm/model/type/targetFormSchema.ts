import { Task } from "entities/Task";

export interface targetFormSchema {
    targetGoals: Task[];
    completedTargetGoals: Task[];
    progressValue?: number;
    error?:string , 
    isLoading?:boolean ,
}
