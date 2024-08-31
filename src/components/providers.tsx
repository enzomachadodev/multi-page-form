import { AddDealContextProvider } from "@/contexts/addDealContext";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/toaster";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange
		>
			<AddDealContextProvider>
				{children}
				<Toaster />
			</AddDealContextProvider>
		</ThemeProvider>
	);
};

