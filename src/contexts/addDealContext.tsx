"use client";

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import {
	NewDeal,
	newDealInitialValuesSchema,
	NewDealInitialValuesType,
} from "@/schemas";

const defaultDeal: NewDealInitialValuesType = {
	name: "",
	link: "",
	coupon: "",
	discount: undefined,
	contactName: "",
	contactEmail: "",
};

type AddDealContextType = {
	newDealData: NewDealInitialValuesType;
	updateNewDealDetails: (dealDetails: Partial<NewDeal>) => void;
	dataLoaded: boolean;
	resetData: () => void;
};

const LOCAL_STORAGE_KEY = "multi_page_form_demo_new_deal_data";

export const AddDealContext = createContext<AddDealContextType | null>(null);

export const AddDealContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [dataLoaded, setDataLoaded] = useState<boolean>(false);
	const [newDealData, setNewDealData] =
		useState<NewDealInitialValuesType>(defaultDeal);

	const readFromLocalStorage = () => {
		const dataString = localStorage.getItem(LOCAL_STORAGE_KEY);

		if (!dataString) return setNewDealData(defaultDeal);

		const validatedData = newDealInitialValuesSchema.safeParse(
			JSON.parse(dataString)
		);

		if (validatedData.success) return setNewDealData(validatedData.data);

		return setNewDealData(defaultDeal);
	};

	const writeToLocalStorage = useCallback(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newDealData));
	}, [newDealData]);

	const updateNewDealDetails = useCallback(
		(dealDetails: Partial<NewDeal>) => {
			setNewDealData({ ...newDealData, ...dealDetails });
		},
		[newDealData]
	);

	const resetData = () => {
		setNewDealData(defaultDeal);
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultDeal));
	};

	useEffect(() => {
		readFromLocalStorage();
		setDataLoaded(true);
	}, []);

	useEffect(() => {
		if (dataLoaded) return writeToLocalStorage();
	}, [newDealData, dataLoaded, writeToLocalStorage]);

	return (
		<AddDealContext.Provider
			value={{
				newDealData,
				updateNewDealDetails,
				dataLoaded,
				resetData,
			}}
		>
			{children}
		</AddDealContext.Provider>
	);
};

export const useAddDealContext = () => {
	const context = useContext(AddDealContext);

	if (!context)
		throw new Error("useAddDealContext must be used within an AddDealContext");

	return context;
};

