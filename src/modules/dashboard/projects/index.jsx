import { Stack } from "@mui/material";
import SectionHeaders from "../../components/Section-Headers";
import Cards from "../../components/Cards";
import { Flippy, Javascript, Lexi, MaterialUI, NextJS, Reactjs, Redux, RestAPI, Roslib, Singlife, SPP, Wordpress, Xurpas, Zesty } from "../../../assets/images";

const projects = [
	{
		projectImage: SPP,
		projectName: 'Singlife Plan and Protect',
		projectDescription: 'Insurance app that offers multiple plans',
		projectScope: [NextJS, Javascript, MaterialUI, RestAPI, Redux],
		link: 'https://planandprotect.singlife.com.ph/login',
	},
	{
		projectImage: Flippy,
		projectName: 'Flippy UI',
		projectDescription: 'UI for chef for interactive cooking',
		projectScope: [Reactjs, Javascript, Roslib, Redux],
		link: 'https://misorobotics.com/flippy/',
	},
	{
		projectImage: Lexi,
		projectName: 'Lexi: HR Virtual Assistant',
		projectDescription: 'A virtual HR assistant app were Xurpas employees can file their leaves',
		projectScope: [Reactjs, MaterialUI, Redux],
		link: 'https://lexi.xurpasportal.com/v1/web/',
	},
	{
		projectImage: Singlife,
		projectName: 'Singlife Website',
		projectDescription: 'SinglifePH company website',
		projectScope: [Zesty],
		link: 'https://singlife.com.ph/',
	},
	{
		projectImage: Xurpas,
		projectName: 'Xurpas Website',
		projectDescription: 'Xurpas company website',
		projectScope: [Wordpress],
		link: 'https://xurpasgroup.com/',
	},
]

export default function Projects() {
	return(
		<Stack id="projects">
			<SectionHeaders sectionHeaderText={'projects'}/>
				<Stack
					gap="20px"
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						flexDirection: 'row',
						justifyContent: 'space-evenly',
						mt: '50px',
					}}
				>
					{projects.map((project) => 
						<Cards
							key={project.projectName}
							projectImage={project.projectImage}
							projectName={project.projectName}
							projectDescription={project.projectDescription}
							projectScope={project.projectScope}
							projectLink={project.link}
						/>
					)}
				</Stack>
		</Stack>
	)
}