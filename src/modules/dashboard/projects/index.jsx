import { Stack } from "@mui/material";
import SectionHeaders from "../../components/Section-Headers";
import Cards from "../../components/Cards";
import { Flippy, Lexi, Singlife, SPP, Xurpas } from "../../../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const projects = [
	{
		projectImage: SPP,
		projectName: 'Singlife Plan and Protect',
		projectDescription: 'Insurance app that offers multiple plans',
		projectScope: ['NextJS', 'Javascript', 'MUI', 'RestAPI', 'Redux Toolkit'],
		link: 'https://planandprotect.singlife.com.ph/login',
		withLive: true,
	},
	{
		projectImage: Flippy,
		projectName: 'Flippy UI',
		projectDescription: 'UI for chef for interactive cooking',
		projectScope: ['ReactJS', 'Javascript', 'roslib', 'ReduxThunk'],
		link: 'https://misorobotics.com/flippy/',
		withLive: false,
	},
	{
		projectImage: Lexi,
		projectName: 'Lexi: HR Virtual Assistant',
		projectDescription: 'A virtual HR assistant app were Xurpas employees can file their leaves',
		projectScope: ['ReactJS', 'MUI', 'ReduxThunk'],
		link: 'https://lexi.xurpasportal.com/v1/web/',
		withLive: true,
	},
	{
		projectImage: Singlife,
		projectName: 'Singlife Website',
		projectDescription: 'SinglifePH company website',
		projectScope: ['Zesty'],
		link: 'https://singlife.com.ph/',
		withLive: true,
	},
	{
		projectImage: Xurpas,
		projectName: 'Xurpas Website',
		projectDescription: 'Xurpas company website',
		projectScope: ['Wordpress'],
		link: 'https://xurpasgroup.com/',
		withLive: true,
	},
]

export default function Projects() {
	return(
		<Stack id="projects">
			<SectionHeaders sectionHeaderText={'projects'}/>
				<Swiper
					slidesPerView={2}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
					style={{
						overflowX: 'hidden',
						paddingTop: '5vh',
					}}
				>
					{projects.map((project) => 
						<SwiperSlide>
							<Cards
								projectImage={project.projectImage}
								projectName={project.projectName}
								projectDescription={project.projectDescription}
								projectScope={project.projectScope}
								withLive={project.withLive}
								projectLink={project.link}
							/>
						</SwiperSlide>
					)}
				</Swiper>
		</Stack>
	)
}