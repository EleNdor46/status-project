import { completedTaskSchema } from 'entities/CompletedTask';
import { ProgressFormSchema } from "entities/ProgressForm/model/type/ProgressFormSchema";
import { taskSchema } from "entities/Task/model/type/taskSchema";
import { UserSchema } from "entities/User/model/type/user";
import { loginSchema } from "features/AuthoriztionCard/model/types/loginShema";
import { healthFormSchema } from 'features/healthForm';
import { userApi } from "features/ProfileCard/api/getUserProfileApi";
import { targetFormSchema } from "features/TargetForm";

export interface StateSchema {
    user: UserSchema;
    login: loginSchema;
    progressForm: ProgressFormSchema;
    targetForm:targetFormSchema,
    task:taskSchema,
    completedTask:completedTaskSchema
    healthForm:healthFormSchema
    //@ts-ignore
    [userApi.reducerPath]: ReturnType<userApi.reducer>;
    //
    logingForm?: loginSchema;
}
