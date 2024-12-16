import { Task } from "entities/Task";

export interface User {
    id: string;
    username: string;
    email: string;
    goals: [
        {
            targetGoals: Task[];
            sportGoals: Task[];
            intellectGoals: Task[];
        }
    ];
    "completed goals": {
        completedTargetGoals: Task[];
        completedIntellectGoals: Task[];
        completedSportGoals: Task[];
    };
}

export interface userAuth {
    username: string;
    authData?: User;
}
