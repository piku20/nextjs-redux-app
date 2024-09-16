import { 
    useDispatch, 
    useSelector,
    TypedUseSelectorHook
} from "react-redux";
import { 
    AppDispatch,
    RootState, 
} from "../store";

//const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppDispatch= () => useDispatch<AppDispatch>();
//const useAppSelector = useSelector.withTypes<RootState>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
    useAppDispatch,
    useAppSelector
};