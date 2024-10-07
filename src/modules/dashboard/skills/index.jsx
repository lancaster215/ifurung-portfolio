import { Stack, Typography } from "@mui/material";
import SectionHeaders from "../../components/Section-Headers";
import Cards from "../../components/Cards";
import { useEffect, useState } from "react";

const skills = [
	{
		skill: "Languages",
		set: ['JavaScript']
	},
	{
		skill: "Database",
		set: ["MongoDB", "PostgreSQL"],
	},
	{
		skill: "Backend Techonlogies",
		set: ["NodeJS", "ExpressJS"],
	},
	{
		skill: "UI Libraries",
		set: ["MUI", "AntD"],
	},
	{
		skill: "API",
		set: ["REST API"],
	},
	{
		skill: "CMS",
		set: ["Wordpress", "Zesty"],
	},
	{
		skill: "Testing",
		set: ["Jest", "Selenium"],
	},
	{
		skill: "Version Control",
		set: ["Git"]
	}
]

export default function Skills() {
	const [scrollPosition, setScrollPosition] = useState();

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY)
		}
		typeof window !== 'undefined' && window.addEventListener('scroll', handleScroll)
		handleScroll();

		return () => typeof window !== 'undefined' && window.removeEventListener('scroll', handleScroll)
	}, [])
	
	return (
		<Stack id="skills">
			<SectionHeaders sectionHeaderText="skills"/>
			<Stack direction="row" pt="50px">
				<Stack
					sx={{
						maxWidth: '50%',
						width: '50%',
						display: ['none', 'none', 'block']
					}}
				>
					<Typography>Designs here</Typography>
				</Stack>
				<Stack
					sx={{
						maxWidth: ['100%', '100%','50%'],
						width: ['100%', '100%','50%'],
						justifyContent: 'flex-start',
						alignItems: 'flex-start',
						flexWrap: 'wrap',
						flexDirection: ["row", "row-reverse"],
					}}
					direction="row"
					gap="50px"
				>
					{skills.map((skill, index) => 
						<Cards 
							key={skill.skill}
							sx={{
								opacity: scrollPosition >= (500 + (index * 90)) ? 1 : 0,
								transition: 'opacity 1s ease-in-out',
							}}
							isSmallCard={true}
							skillName={skill.skill}
							techStacks={skill.set}
						/>
					)}
				</Stack>
			</Stack>
			
		</Stack>
	)
}