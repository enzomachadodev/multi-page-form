import { Input, InputProps } from "./ui/input";
import { Label } from "./ui/label";

interface FormInputProps extends InputProps {
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
				className={errorMessage && "border-red-500"}
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

