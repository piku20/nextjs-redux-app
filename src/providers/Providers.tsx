"use client";

import store from "@/store/store";
import { ReactNode } from "react";
import {Provider} from "react-redux";
import { Toaster } from "react-hot-toast";

const Providers = ({
    children
}:{
    children:ReactNode
}) => {
    return(
        <Provider
            store={store}
        >
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            {children}
        </Provider>
    );
};

export default Providers;