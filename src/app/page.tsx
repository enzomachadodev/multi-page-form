import Link from "next/link";
import { Button } from "@/components/ui/button";

const Home = () => {
	return (
		<main className="w-full h-screen flex items-center justify-center">
			<Button
				asChild
				size="lg"
			>
				<Link href="/add-pro">Multi-Page Form</Link>
			</Button>
		</main>
	);
};

export default Home;

