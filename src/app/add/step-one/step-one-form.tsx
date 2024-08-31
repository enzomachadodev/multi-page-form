"use client";

import { FormInput } from "@/components/form-input";
import { SubmitButton } from "@/components/ui/submit-button";
import { FormErrors } from "@/types";
import { useFormState } from "react-dom";
import { stepOneFormAction } from "./actions";

const initialState: FormErrors = {};

export const StepOneForm = () => {
	const [serverErrors, formAction] = useFormState(
		stepOneFormAction,
		initialState
	);
	return (
		<form
			action={formAction}
			className="flex flex-1 flex-col"
		>
			<div className="flex w-full flex-col lg:max-w-[700px]">
				<FormInput
					label="Product Name"
					id="name"
					type="text"
					minLength={2}
					required
					errorMessage={serverErrors?.name}
				/>
				<FormInput
					label="Link"
					id="link"
					type="text"
					required
					errorMessage={serverErrors?.link}
					description='Must start with "http://" or "https://"'
					pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
				/>
				<SubmitButton>Submit</SubmitButton>
			</div>
		</form>
	);
};

