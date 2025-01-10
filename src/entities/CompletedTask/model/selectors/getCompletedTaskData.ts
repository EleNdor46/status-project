import { StateSchema } from "app/provider/storeProvider/config/StateShema";

export const getCompletedTaskData = (state: StateSchema) =>
    state.completedTask.data;
