"use server";

import {
	NewDeal,
	stepTwoSchema,
	stepOneSchema,
	stepThreeSchema,
} from "@/schemas";
import { AddDealRoutes } from "@/types";

interface SubmitDealActionReturnType {
	redirect?: string;
	errorMessage?: string;
	success?: boolean;
}

export const submitDealAction = async (
	deal: NewDeal
): Promise<SubmitDealActionReturnType> => {
	const stepOneValidated = stepOneSchema.safeParse(deal);
	if (!stepOneValidated.success) {
		return {
			redirect: AddDealRoutes.PRODUCT_INFO,
			errorMessage: "Please validate product info.",
		};
	}

	const stepTwoValidated = stepTwoSchema.safeParse(deal);
	if (!stepTwoValidated.success) {
		return {
			redirect: AddDealRoutes.COUPON_DETAILS,
			errorMessage: "Please validate coupon details.",
		};
	}

	const stepThreeValidated = stepThreeSchema.safeParse(deal);
	if (!stepThreeValidated.success) {
		return {
			redirect: AddDealRoutes.PRODUCT_INFO,
			errorMessage: "Please validate contact info.",
		};
	}

	const retVal = { success: true, redirect: "/" };
	console.log(retVal);
	return retVal;
};

