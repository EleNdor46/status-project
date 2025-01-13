import { StateSchema } from "app/provider/storeProvider/config/StateShema";

export const getIntellectFormProgressValue = (state: StateSchema) =>
    state.targetForm.progressValue;
