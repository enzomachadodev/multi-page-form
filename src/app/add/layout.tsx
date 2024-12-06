import { PageHeader } from "@/components/page-header";
import { StepNavigation } from "@/components/step-navigation";

const DealsLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-full container max-w-screen-lg pt-20 lg:pt-40">
			<PageHeader
				title="Share a Deal"
				subtitle="Have an amazing deal or discount tailored for developers? Let us know!"
			/>

			<div className="mt-20 mb-28 flex flex-col gap-x-16 text-white lg:flex-row">
				<StepNavigation />
				<div className="w-full">{children}</div>
			</div>
		</div>
	);
};

export default DealsLayout;

