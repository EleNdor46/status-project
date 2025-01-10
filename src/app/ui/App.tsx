import { memo, useEffect } from "react";
import { AppRouting } from "app/provider/router/AppRouting";
import { Navbar } from "shared/ui/Navbar/Navbar";
import { useTheme } from "shared/hooks/useTheme/useTheme";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "entities/User/model/slice/userSlice";
import { getAuthData } from "entities/User";
import { fetchComletedTask } from "entities/CompletedTask";
import { fetchTask } from "entities/Task/model/services/fetchTask";
interface AppProps {
    className?: string;
}

export const App = memo(({ className }: AppProps) => {
    const { theme, toggleTheme } = useTheme();

    const dispatch = useDispatch();
    const inited = useSelector(getAuthData);

    useEffect(() => {
        dispatch(userActions.initUserData());
        dispatch(fetchComletedTask());
        dispatch(fetchTask());
    }, []);

    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <AppRouting />
        </div>
    );
});
