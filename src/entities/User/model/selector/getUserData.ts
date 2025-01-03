import { StateSchema } from "app/provider/storeProvider/config/StateShema";

export const getUserId = (state: StateSchema) => state.user.id;
export const getUsername = (state: StateSchema) => state.user.username;
export const getUserCompletedGoals = (state: StateSchema) =>
    state.user.completedGoals;
export const getUserGoals = (state: StateSchema) => state.user.goals;
