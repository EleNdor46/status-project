import cls from "./AuthoriztionPage.module.scss";
import { memo, useEffect, useState } from "react";
import { Theme } from "app/provider/themeProvider/lib/themeContext";
import { useTheme } from "shared/hooks/useTheme/useTheme";
import { Page } from "shared/ui/Page/Page";
interface AuthoriztionPageProps {
    className?: string;
}

export const AuthoriztionPage = memo(({ className }: AuthoriztionPageProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { theme, toggleTheme } = useTheme();
    useEffect(() => {
        if (theme !== Theme.DEFAULT) {
            toggleTheme(Theme.DEFAULT);
        }
    }, []);

    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };
    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const onSubmit = () => {
        console.log(1);
    };

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
                <button className={cls.singInBtn} onClick={onSubmit}>
                    Sing In
                </button>
            </div>
        </Page>
    );
});
