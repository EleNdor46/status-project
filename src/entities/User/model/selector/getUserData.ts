import { StateSchema } from "app/provider/storeProvider/config/StateShema";

export const getAuthData = (state: StateSchema) => state.user.authData;
