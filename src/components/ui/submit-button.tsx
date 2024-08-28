"use client";

import { Button, ButtonProps } from "./button";
import { useFormStatus } from "react-dom";
import { Loader } from "./loader";

export const SubmitButton = ({ children, size, ...props }: ButtonProps) => {
	const { pending } = useFormStatus();

	return (
		<Button
			type="submit"
			size={size || "lg"}
			{...props}
		>
			{pending ? <Loader /> : children}
		</Button>
	);
};

