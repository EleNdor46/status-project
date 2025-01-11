import { StateSchema } from "app/provider/storeProvider/config/StateShema";

export const getHealthFormProgressValue = (state: StateSchema) =>
    state.healthForm.progressValue

