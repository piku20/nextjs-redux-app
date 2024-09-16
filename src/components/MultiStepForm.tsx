"use client";

import { 
    useAppDispatch, 
    useAppSelector 
} from "@/store/hooks/hooks";
import { 
    nextStep, 
    previousStep, 
    updateForm
} from "@/store/slicecs/formState";
import { FormState } from '@/types/types';
import StepButton from "./StepButton";
import { useForm } from "react-hook-form";
import FormInput1 from "./FormInput1";
import { Button } from "./ui/button";

const MultiStepForm = () => {
    const dispatch = useAppDispatch();
    const {
        firstName,
        lastName,
        email,
        phone,
        step
    } = useAppSelector((state) => state.form);

    const user = {
        firstName,
        lastName,
        email,
        phone
    };
    console.log(user);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormState>({
        defaultValues: {
            firstName,
            lastName,
            email,
            phone
        },
    });

    const onSubmit = (data: FormState) => {
        dispatch(updateForm(data));
    };

    return(
        <div
            className="
                bg-blue-50 p-8 min-h-screen
            "
        >
            <h2 className="text-center">Multi Step Form</h2>
            <div
                className="
                    max-w-xl 
                    border 
                    border-gray-300 
                    bg-white 
                    rounded-xl 
                    mx-auto
                    min-h-96
                    p-8
                "
            >
                {/* Steps */}
                <div
                    className="
                        flex items-center justify-between
                    "
                >
                    <StepButton stepNo={1} />
                    <div
                        className="
                            flex-1 h-[1px] bg-slate-300 w-full
                        "
                    ></div>
                    <StepButton stepNo={2} />
                    <div
                        className="
                            flex-1 h-[1px] bg-slate-300 w-full
                        "
                    ></div>
                    <StepButton stepNo={3} />
                </div>
                <div className="py-6">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {step === 1 && (
                            <div className="space-y-4">
                                
                                <FormInput1
                                    label="First Name"
                                    errors = {errors}
                                    field="firstName"
                                    register={register}
                                />
                                <FormInput1
                                    label="Last Name"
                                    errors = {errors}
                                    field="firstName"
                                    register={register}
                                />
                                <Button
                                    type="button"
                                    onClick={()=>{
                                        handleSubmit(onSubmit)();
                                        dispatch(nextStep());
                                    }}
                                >
                                    Next
                                </Button>
                            </div>
                        )}
                        {step === 2 && (
                            <div>
                                <FormInput1
                                    label="Email"
                                    errors = {errors}
                                    field="email"
                                    register={register}
                                />
                                <FormInput1
                                    label="Phone"
                                    errors = {errors}
                                    field="phone"
                                    register={register}
                                />
                                <div className="mt-6 flex justify-between items-center">
                                <Button
                                    variant={"outline"}
                                    type="button"
                                    onClick={() => dispatch(previousStep())}
                                >
                                    Back
                                </Button>
                                <Button type="submit">Submit</Button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;