import { useAddDealContext } from "@/contexts/addDealContext";
import { Input, InputProps } from "./ui/input";
import { Label } from "./ui/label";

interface FormInputProps extends InputProps {
	id: string;
	label: string;
	description?: string;
	errorMessage?: string;
}

export const FormInput = ({
	id,
	label,
	description,
	errorMessage,
	className,
	...props
}: FormInputProps) => {
	const { updateNewDealDetails, newDealData } = useAddDealContext();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateNewDealDetails({ [e.target.name]: e.target.value });
	};

	return (
		<div className={className}>
			<Label htmlFor={id}>
				{label}
				{description && (
					<span className="text-xs text-slate-400 block mb-1">
						{description}
					</span>
				)}
			</Label>
			<Input
				id={id}
				name={id}
				onChange={handleInputChange}
				defaultValue={newDealData[id as keyof typeof newDealData]}
				className={errorMessage && "border-red-500 dark:border-red-500"}
				{...props}
			/>
			<div className="min-h-8 mt-1">
				{errorMessage && (
					<span className="text-red-500 text-xs block">{errorMessage}</span>
				)}
			</div>
		</div>
	);
};

