import { StateSchema } from "app/provider/storeProvider/config/StateShema";

export const getCounterCount = (state: StateSchema) => state.Counter.count;
