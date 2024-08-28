import { FormInput } from "@/components/form-input";
import { SubmitButton } from "@/components/ui/submit-button";

export const StepTwoForm = () => {
	return (
		<form className="flex flex-1 flex-col">
			<div className="flex w-full flex-col lg:max-w-[700px]">
				<FormInput
					label="Coupon Code"
					id="code"
					type="text"
					minLength={5}
					required
				/>
				<FormInput
					label="Discount (%)"
					id="discount"
					type="number"
					required
					min={1}
					max={100}
				/>
				<SubmitButton>Submit</SubmitButton>
			</div>
		</form>
	);
};

