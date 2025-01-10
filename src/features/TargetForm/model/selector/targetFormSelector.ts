import { StateSchema } from "app/provider/storeProvider/config/StateShema";

export const getTargetFormValue = (state: StateSchema) =>
    state.targetForm.progressValue;

