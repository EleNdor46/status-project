import cls from "./AuthoriztionPage.module.scss";
import { memo, useCallback, useEffect } from "react";
import { Theme } from "app/provider/themeProvider/lib/themeContext";
import { useTheme } from "shared/hooks/useTheme/useTheme";
import { Page } from "shared/ui/Page/Page";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "features/AuthoriztionCard/model/slice/loginSlice";
import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername,
} from "features/AuthoriztionCard/model/selector/getLoginSelector";
import { loginByUsername } from "features/AuthoriztionCard/model/services/loginByUsername";
import { useNavigate } from "react-router-dom";
interface AuthoriztionPageProps {
    className?: string;
}

export const AuthoriztionPage = memo(({ className }: AuthoriztionPageProps) => {
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { theme, toggleTheme } = useTheme();
    useEffect(() => {
        if (theme !== Theme.DEFAULT) {
            toggleTheme(Theme.DEFAULT);
        }
    }, []);

    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setUsername(e.target.value));
    };

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setPassword(e.target.value));
    };

    const onSubmitLogin = useCallback(async () => {
        const result = await dispatch(loginByUsername({ password, username }));
        //@ts-ignore
        if (result.meta.requestStatus == "fulfilled") {
            navigate("/profile");
        }
    }, [dispatch, password, username]);

    return (
        <Page className={cls.page}>
            <div className={cls.card}>
                <div className={cls.label}>Sing In</div>
                <div className={cls.dataInput}>
                    <div className={cls.userName}>
                        <input
                            type="text"
                            placeholder="Login"
                            className={cls.input}
                            value={username}
                            onChange={(e) => onChangeUsername(e)}
                        />
                    </div>
                    <div className={cls.password}>
                        <input
                            type="text"
                            placeholder="Password"
                            className={cls.input}
                            value={password}
                            onChange={(e) => onChangePassword(e)}
                        />
                    </div>
                </div>
                <button
                    className={cls.singInBtn}
                    onClick={onSubmitLogin}
                    disabled={isLoading}
                >
                    Sing In
                </button>
            </div>
        </Page>
    );
});
