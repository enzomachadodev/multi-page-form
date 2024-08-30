import { FormInput } from "@/components/form-input";
import { SubmitButton } from "@/components/ui/submit-button";

export const StepThreeForm = () => {
	return (
		<form className="flex flex-1 flex-col">
			<div className="flex w-full flex-col lg:max-w-[700px]">
				<FormInput
					label="Contact Name"
					id="contactName"
					type="text"
					minLength={5}
					required
				/>
				<FormInput
					label="Contact Email"
					id="contactEmail"
					type="email"
					required
				/>
				<SubmitButton>Submit</SubmitButton>
			</div>
		</form>
	);
};

