import Footer from "./Footer";
import Header from "./Header";


export default function FooterComponentWrapper({ children }) {
	return (
		<>
			<Header />
				{children}
			<Footer />
		</>
	)
}