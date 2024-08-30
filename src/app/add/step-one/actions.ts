"use server";

import { stepOneSchema } from "@/schemas";
import { AddDealRoutes, FormErrors } from "@/types";
import { redirect } from "next/navigation";

export const stepOneFormAction = (
	prevState: FormErrors | undefined,
	formData: FormData
): FormErrors | undefined => {
	const data = Object.fromEntries(formData.entries());
	const validatedData = stepOneSchema.safeParse(data);

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

	return redirect(AddDealRoutes.COUPON_DETAILS);
};

