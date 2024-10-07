import { Stack } from "@mui/material"
import SplashContent from "./splash-content"
import Projects from "./projects"
import Skills from "./skills"
import AboutMe from "./about-me"

const Dashboard = () => {
	return (
		<Stack 
			sx={{
				position: 'relative',
				alignContent: 'center',
				flexWrap: 'wrap',
			}}
		>
			<Stack sx={{width: '80%'}}>
				<SplashContent/>
				<Stack gap="20vh">
					<Projects />
					<Skills />
					<AboutMe />
				</Stack>
			</Stack>
		</Stack>
	)
}

export default Dashboard