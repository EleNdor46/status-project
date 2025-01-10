export interface Task {
    id: string;
    userId: string;
    title: string;
    done: boolean;
    type: taskType;
    favourites: boolean;
}

export enum taskType {
    TARGET = "target",
    INTELLECT = "intellect",
    HEALTH = "health",
}

export interface taskSchema {
    isLoading: boolean;
    error?: string;
    data?: Task[];
}
