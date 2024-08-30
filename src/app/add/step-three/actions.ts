"use server";

import { stepThreeSchema } from "@/schemas";
import { AddDealRoutes, FormErrors } from "@/types";
import { redirect } from "next/navigation";

export const stepThreeFormAction = (
	prevState: FormErrors | undefined,
	formData: FormData
): FormErrors | undefined => {
	const data = Object.fromEntries(formData.entries());
	const validatedData = stepThreeSchema.safeParse(data);

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

	return redirect(AddDealRoutes.REVIEW_DEAL);
};

