import { Counter } from "./../../../../entities/Counter/model/types/counterShcema";
import { UserShema } from "entities/User";

export interface StateSchema {
    User: UserShema;
    Counter: Counter;
}
