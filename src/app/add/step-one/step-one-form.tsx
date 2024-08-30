import { FormInput } from "@/components/form-input";
import { SubmitButton } from "@/components/ui/submit-button";

export const StepOneForm = () => {
	return (
		<form className="flex flex-1 flex-col">
			<div className="flex w-full flex-col lg:max-w-[700px]">
				<FormInput
					label="Name"
					id="name"
					type="text"
					minLength={2}
					required
				/>
				<FormInput
					label="Link"
					id="link"
					type="text"
					required
					description='Must start with "http://" or "https://"'
					pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
				/>
				<SubmitButton>Submit</SubmitButton>
			</div>
		</form>
	);
};

