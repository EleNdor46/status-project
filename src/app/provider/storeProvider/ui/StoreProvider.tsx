import { Provider } from "react-redux";
import cls from "./StoreProvider.module.scss";
import { ReactNode, memo } from "react";
import { DeepPartial, configureStore } from "@reduxjs/toolkit";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateShema";
interface StoreProviderProps {
    className?: string;
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({
    children,
    initialState,
}: StoreProviderProps) => {
    const store = createReduxStore(initialState as StateSchema);

    return <Provider store={store}>{children}</Provider>;
};
