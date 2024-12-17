import { User } from "entities/User";
import { userApi } from "features/ProfileCard/api/getUserProfileApi";

export interface StateSchema {
    user: User;
    //@ts-ignore
    [userApi.reducerPath]: ReturnType<userApi.reducer>;
}
