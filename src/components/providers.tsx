import { AddDealContextProvider } from "@/contexts/addDealContext";
import { ThemeProvider } from "./theme-provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange
		>
			<AddDealContextProvider>{children}</AddDealContextProvider>
		</ThemeProvider>
	);
};
