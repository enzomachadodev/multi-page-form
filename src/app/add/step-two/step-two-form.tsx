"use client";

import { FormInput } from "@/components/form-input";
import { SubmitButton } from "@/components/ui/submit-button";
import { FormErrors } from "@/types";
import { useFormState } from "react-dom";
import { stepTwoFormAction } from "./actions";

const initialState: FormErrors = {};

export const StepTwoForm = () => {
	const [serverErrors, formAction] = useFormState(
		stepTwoFormAction,
		initialState
	);
	return (
		<form
			action={formAction}
			className="flex flex-1 flex-col"
		>
			<div className="flex w-full flex-col lg:max-w-[700px]">
				<FormInput
					label="Coupon Code"
					id="coupon"
					type="text"
					minLength={5}
					required
					errorMessage={serverErrors?.coupon}
				/>
				<FormInput
					label="Discount (%)"
					id="discount"
					type="number"
					min={1}
					max={100}
					required
					errorMessage={serverErrors?.discount}
				/>
				<SubmitButton>Submit</SubmitButton>
			</div>
		</form>
	);
};

