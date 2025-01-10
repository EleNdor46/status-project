import { taskType } from "entities/Task";

export interface completedTask {
    id: string;
    userId: string;
    title: string;
    done: boolean;
    type: taskType;
    favourites: boolean;
}


export interface completedTaskSchema {
    isLoading: boolean;
    error?: string;
    data?: completedTask[];
}
