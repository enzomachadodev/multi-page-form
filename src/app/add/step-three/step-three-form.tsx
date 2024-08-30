"use client";

import { FormInput } from "@/components/form-input";
import { SubmitButton } from "@/components/ui/submit-button";
import { FormErrors } from "@/types";
import { useFormState } from "react-dom";
import { stepThreeFormAction } from "./actions";

const initialState: FormErrors = {};

export const StepThreeForm = () => {
	const [serverErrors, formAction] = useFormState(
		stepThreeFormAction,
		initialState
	);
	return (
		<form
			action={formAction}
			className="flex flex-1 flex-col"
		>
			<div className="flex w-full flex-col lg:max-w-[700px]">
				<FormInput
					label="Contact Name"
					id="contactName"
					type="text"
					minLength={5}
					required
					errorMessage={serverErrors?.contactName}
				/>
				<FormInput
					label="Contact Email"
					id="contactEmail"
					type="email"
					required
					errorMessage={serverErrors?.contactEmail}
				/>
				<SubmitButton>Submit</SubmitButton>
			</div>
		</form>
	);
};

