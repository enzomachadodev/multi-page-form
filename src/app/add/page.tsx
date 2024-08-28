import { AddDealRoutes } from "@/types";
import { redirect } from "next/navigation";

const AddPage = () => {
	redirect(AddDealRoutes.PRODUCT_INFO);
};

export default AddPage;
