import { StateSchema } from "app/provider/storeProvider/config/StateShema";

export const getUserId = (state: StateSchema) => state.user.id;
export const getUsername = (state: StateSchema) => state.user.username;
