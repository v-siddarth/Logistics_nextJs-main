import FaqHomeOne from "./FaqHomeOne";
import TeamHomeOne from "./TeamHomeOne";
import BlogHomeOne from "./BlogHomeOne";
import AboutHomeOne from "./AboutHomeOne";
import CounterHomeOne from "./CounterHomeOne";
import ServiceHomeOne from "./ServiceHomeOne";
import DeliverHomeOne from "./DeliverHomeOne";
import PricingHomeOne from "./PricingHomeOne";
import ContactHomeOne from "./ContactHomeOne";
import HeroAreaHomeOne from "./HeroAreaHomeOne";
import PortfolioHomeOne from "./PortfolioHomeOne";
import SubscribeHomeOne from "./SubscribeHomeOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterTwo from "@/layouts/footers/FooterTwo";
import TestimonialHomeOne from "./TestimonialHomeOne";

const HomeOne = () => {
	return (
		<>
			<HeaderOne />
			<HeroAreaHomeOne />
			<CounterHomeOne />
			<ServiceHomeOne />
			<AboutHomeOne />
			<TeamHomeOne />
			<PortfolioHomeOne />
			<SubscribeHomeOne />
			<DeliverHomeOne />
			<TestimonialHomeOne />
			<PricingHomeOne />
			<FaqHomeOne />
			<ContactHomeOne />
			<BlogHomeOne />
			<FooterTwo />
		</>
	);
};

export default HomeOne;
