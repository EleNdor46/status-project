import { Task } from "entities/Task";

export interface User {
    id?: string;
    username?: string;
    password?:string
    goals: 
        {
            targetGoals: Task[];
            sportGoals: Task[];
            intellectGoals: Task[];
        }
    ;
    completedGoals: {
        completedTargetGoals: Task[];
        completedIntellectGoals: Task[];
        completedSportGoals: Task[];
    };
}
