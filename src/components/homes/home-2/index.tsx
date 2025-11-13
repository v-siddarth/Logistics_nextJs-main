import GoogleMap from "./GoogleMap";
import FaqHomeTwo from "./FaqHomeTwo";
import TeamHomeTwo from "./TeamHomeTwo";
import BlogHomeTwo from "./BlogHomeTwo";
import HeroHomeTwo from "./HeroHomeTwo";
import AboutHomeTwo from "./AboutHomeTwo";
import ProjectHomeTwo from "./ProjectHomeTwo";
import ServiceHomeTwo from "./ServiceHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";
import TextSliderHomeTwo from "./TextSliderHomeTwo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import ServiceAreaHomeTwo from "./ServiceAreaHomeTwo";
import TestimonialHomeTwo from "./TestimonialHomeTwo";

const HomeTwo = () => {
	return (
		<>
			<HeaderTwo />
			<HeroHomeTwo />
			<ServiceHomeTwo />
			<AboutHomeTwo />
			<TextSliderHomeTwo />
			<ProjectHomeTwo />
			<ServiceAreaHomeTwo />
			<TestimonialHomeTwo />
			<TeamHomeTwo />
			{/* <FaqHomeTwo /> */}
			{/* <BlogHomeTwo /> */}
			<GoogleMap />
			<FooterTwo />
		</>
	);
};

export default HomeTwo;
