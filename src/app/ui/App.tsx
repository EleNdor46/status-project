import { memo, useEffect } from "react";
import { AppRouting } from "app/provider/router/AppRouting";
import { Navbar } from "shared/ui/Navbar/Navbar";
import { useTheme } from "shared/hooks/useTheme/useTheme";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "entities/User/model/slice/userSlice";
import { getUserId } from "entities/User/model/selector/getUserData";
interface AppProps {
    className?: string;
}

export const App = memo(({ className }: AppProps) => {
    const { theme, toggleTheme } = useTheme();

    const dispatch = useDispatch();
    const inited  = useSelector(getUserId)

    useEffect(() => {
        dispatch(userActions.initUserData());
    }, []);

    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <AppRouting />
        </div>
    );
});
