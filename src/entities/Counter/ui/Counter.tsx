import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import { getCounterCount } from "../model/selectors/getCounterCount";
import { CounterActions } from "../model/slice/counterSlice";
interface CounterProps {
    className?: string;
}

export const Counter = memo(({ className }: CounterProps) => {
    const value = useSelector(getCounterCount);
    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(CounterActions.increment());
    };
    const onDecrement = () => {
        dispatch(CounterActions.decrement());
    };

    return (
        <div>
            <span>{value}</span>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );
});
