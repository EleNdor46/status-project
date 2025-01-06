import { StateSchema } from "app/provider/storeProvider/config/StateShema";

export const getProgressFormTarget = (state: StateSchema) =>
    state.progressForm.targetForm;
export const getProgressFormHealth = (state: StateSchema) =>
    state.progressForm.healthForm;
export const getProgressFormIntellect = (state: StateSchema) =>
    state.progressForm.intellectForm;
