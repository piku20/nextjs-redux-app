"use client";
import {
    Minus,
    Plus
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { decrement, increment } from "@/store/slicecs/counterSlice";

const Counter = () => {
    
    const count = useAppSelector((state) => state.counter.value);

    const dispatch = useAppDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    
    return(
        <div
            className="
                max-w-3xl 
                mx-auto 
                flex 
                flex-col 
                justify-center 
                items-center 
                text-white
            "
        >
            <h2
                className="
                    scroll-m-20
                    pb-6 
                    text-4xl 
                    font-semibold 
                    tracking-tight 
                    first:mt-0
                "
            >
                Redux Counter
            </h2>
            <div
                className="
                    py-4
                "
            >
                <div
                    className="
                        flex 
                        items-center 
                        space-x-6
                    "
                >
                    <button
                        onClick={handleDecrement}
                    >
                        <Minus
                            className="w-8 h-8"
                        />
                    </button>
                    <p
                        className="
                            scroll-m-20 
                            text-6xl 
                            font-semibold 
                            tracking-tight 
                            first:mt-0
                        "
                    >
                        {count}
                    </p>
                    <button
                        onClick={handleIncrement}
                    >
                        <Plus
                            className="w-8 h-8"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;