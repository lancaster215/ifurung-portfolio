import { Stack, Typography } from "@mui/material";
import SectionHeaders from "../../components/Section-Headers";
import Image from "next/image";
import { Selfie } from "../../../assets/images";

export default function AboutMe() {
	return (
		<Stack id="about-me" pb="30vh">
			<SectionHeaders sectionHeaderText="about-me"/>
			<Stack direction={["column", "row"]} pt={["0px", "50px"]}>
				<Stack
					sx={{
						width: ['100%', '0%'],
						display: ['flex', 'none', 'none'],
						position: 'relative',
						justifyContent: 'center',
						alignItems: 'center',
						height: ['30vh', 'auto', 'auto']
					}}
				>
					<Stack 
						sx={{
							width: '200px',
							height: '200px',
							borderRadius: '50%',
							backgroundImage: `url(${Selfie.src})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							zIndex: 1,
							position: 'absolute',
						}}
					/>
					<Stack
						sx={{
							width: '200px',
							height: '200px',
							borderRadius: '50%',
							border: '1px solid transparent',
							background: 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)',
							backgroundOrigin: 'border-box',
							backgroundClip: 'border-box',
							position: 'absolute',
							opacity: 0.75,
						}}
					/>
				</Stack>
				<Stack
					sx={{
						width: ['100%','50%','50%'],
						zIndex: 10,
					}}
				>
					<Typography variant="M3/display" color="grey.gray" mb="20px">
						Hello, I&apos;m Francis!
						<br/><br/>
						I&apos;m a software engineer and I started my career way back 2019. I started as a junior frontend developer then I got accepted to a new role as a frontend developer. 
						<br/><br/>
						I have created numerous projects local and international. Over the years, I have honed my skills and now I am software engineer developing one of the biggest insurance app!
					</Typography>
				</Stack>
				<Stack
					sx={{
						width: ['100%','50%','50%'],
						display: ['none', 'block', 'block'],
						position: 'relative'
					}}
				>
					<Stack 
						sx={{
							width: '500px',
							height: '500px',
							borderRadius: '50%',
							backgroundImage: `url(${Selfie.src})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							top: -50,
							right: -50,
							zIndex: 1,
							position: 'absolute',
						}}
					/>
					<Stack
						sx={{
							position: 'absolute',
							width: '500px',
							height: '500px',
							borderRadius: '50%',
							border: '1px solid transparent',
							background: 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)',
							backgroundOrigin: 'border-box',
							backgroundClip: 'border-box',
							top: -50,
							right: -50,
							opacity: 0.75
						}}
					/>
				</Stack>
			</Stack>
		</Stack>
	)
}