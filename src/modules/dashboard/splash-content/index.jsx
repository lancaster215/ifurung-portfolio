import { Button, Stack, Typography } from "@mui/material";
import CustomButton from "../../components/Button";

export default function SplashContent() {
	return (
		<Stack mt="62px" direction={['column', 'row', 'row']} pt="20px" pb="20vh">
			<Stack
				sx={{
					maxWidth: ['100%', '50%', '50%'],
					width: ['100%', '50%', '50%']
				}}
				spacing="20px"
			>   
				<Stack>
					<Typography variant="M3/headline-semibold" color="pink.hotPink" component="p">
						<Typography variant="M3/headline-semibold" >I&apos;m</Typography>{' '}Francis
						<Typography variant="M3/headline-semibold" >, a</Typography><br/>
						{' '}software engineer
					</Typography>
				</Stack>
				<Stack>
					<Typography variant="M3/title-medium" color="grey.gray">I develop corporate project for both <br/> national and international clients.</Typography>
				</Stack>
				<Stack>
					<CustomButton buttonLink={"#contact"} buttonText={"Contact Me"}/>
				</Stack>
			</Stack>
			{/* <Stack
				sx={{
					maxWidth: '50%',
					width: '50%',
					justifyContent: 'flex-end',
				}}
			>
				<Typography>Creative Shot here</Typography>
			</Stack> */}
		</Stack>
	)
}