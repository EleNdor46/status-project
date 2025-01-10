import { StateSchema } from "app/provider/storeProvider/config/StateShema";

export const getTaskData = (state: StateSchema) => state.task.data ?? []
