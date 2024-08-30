"use server";

import { stepTwoSchema } from "@/schemas";
import { AddDealRoutes, FormErrors } from "@/types";
import { redirect } from "next/navigation";

export const stepTwoFormAction = (
	prevState: FormErrors | undefined,
	formData: FormData
): FormErrors | undefined => {
	const data = Object.fromEntries(formData.entries());
	const validatedData = stepTwoSchema.safeParse(data);

	if (!validatedData.success) {
		const errors = validatedData.error.issues.reduce(
			(acc: FormErrors, issue) => {
				acc[issue.path[0]] = issue.message;
				return acc;
			},
			{}
		);

		return errors;
	}

	return redirect(AddDealRoutes.CONTACT_INFO);
};

