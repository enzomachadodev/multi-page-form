"use client";

import { SubmitButton } from "@/components/ui/submit-button";
import { useAddDealContext } from "@/contexts/addDealContext";
import { useToast } from "@/hooks/use-toast";
import { NewDeal } from "@/schemas";
import { useRouter } from "next/navigation";
import { submitDealAction } from "./actions";

export const ReviewForm = () => {
	const router = useRouter();
	const { toast } = useToast();
	const { newDealData, resetData } = useAddDealContext();

	const { name, link, coupon, discount, contactName, contactEmail } =
		newDealData;

	const handleFormSubmit = async (formData: FormData) => {
		const { redirect, errorMessage, success } = await submitDealAction(
			newDealData as NewDeal
		);

		if (success) {
			toast({
				description: "Deal submitted successfully",
			});
			resetData();
		}
		if (errorMessage) {
			toast({
				variant: "destructive",
				description: errorMessage,
			});
		}
		if (redirect) {
			return router.push(redirect);
		}
	};

	return (
		<form
			action={handleFormSubmit}
			className="flex flex-1 flex-col gap-2 items-stretch lg:max-w-[700px]"
		>
			<p className="text-xl md:text-3xl">Product Name: {name}</p>
			<p className="font-light text-white/90">
				Link:{" "}
				<a
					href={link}
					target="_blank"
					rel="noreferrer"
					className="font-normal underline hover:text-teal-500"
				>
					{link}
				</a>
			</p>
			<p className="text-white/90">Coupon: {coupon}</p>
			<p className="text-white/90">Discount: {discount}%</p>
			<p className="text-white/90">Contact Name: {contactName}</p>
			<p className="text-white/90">Contact Email: {contactEmail}</p>
			<SubmitButton className="mt-8">Submit</SubmitButton>
		</form>
	);
};

