import { FormState } from "@/types/types";
import { FC } from "react";
import { 
    FieldErrors,
    UseFormRegister 
} from "react-hook-form";

interface IFormInputProps{
    label:string;
    errors?:FieldErrors;
    field: keyof FormState;
    register: UseFormRegister<FormState>;
};

const FormInput1:FC<IFormInputProps> = ({
    label,
    errors,
    field,
    register,
}) => {
    return(
        <div>
            <label
                className="mb-2"
            >{label}</label>
            <input
                className="
                    py-3 
                    px-4 
                    block 
                    w-full 
                    border-gray-200 
                    rounded-lg 
                    border-text-sm
                    focus:border-blue-500
                    focus:ring-blue-500 
                    disabled:opacity-50 
                    disabled:pointer-events-none 
                    dark:bg-neutral-900
                    dark:border-neutral-700 
                    dark:text-neutral-400 
                    dark:placeholder-neutral-500 
                    dark:focus:ring-neutral-600
                "
                {...register(
                    field,
                    {
                        required:true,
                    },
                )}
                placeholder={label}
            />
            {errors?.[field] && (
                <span
                    className="
                        text-red-500
                        text-xs
                    "
                >
                    {label} is required
                </span>
            )}
        </div>
    );
};

export default FormInput1;