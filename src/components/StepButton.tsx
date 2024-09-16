import { cn } from "@/lib/utils";
import { useAppSelector } from "@/store/hooks/hooks";
import { FC } from "react";

interface IStepButtonProps{
    stepNo:number;
};

const StepButton:FC<IStepButtonProps> = ({
    stepNo,
})=>{
    
    const { step } = useAppSelector(
        (state) => state.form
      );
    
    return(
        <button
            className={cn(
              "w-10 h-10 bg-white rounded-full border border-gray-300 flex items-center justify-center",
              step === stepNo && "border-blue-600 border-2"
            )}
        >
            {stepNo}
        </button>
    );
};

export default StepButton;