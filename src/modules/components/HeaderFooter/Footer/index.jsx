import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Email, Github, Landmark, LinkedIn } from "../../../../assets/images";
import { useEffect, useRef } from "react";

export default function Footer() {
	const contactRef = useRef();

	useEffect(() => {
		if(contactRef.current) {
			localStorage.setItem('contactRef', Math.round(Number(contactRef?.current?.getBoundingClientRect().bottom)));
		}
	},[contactRef])

	return(
		<Stack 
			id="contact"
			ref={contactRef}
			sx={{ 
				width: '100%',
				py: '5vh',
				alignItems: 'center',
				borderTop: '1px solid #ABB2BF'
			}}
		>
			<Stack 
				direction={["column","row"]}
				sx={{
					width: '80%',
				}}
			>
				<Stack
					sx={{
						width: ['100%', '50%'],
					}}
				>
					<Stack direction="row" spacing="10px" alignItems="center">
						<Image alt="email" src={Email} width={30} height={30} />
						<Typography 
							variant="M3/label-small"
							component="a" 
							target="_blank" 
							href="mailto:ifurungfranco@gmail.com"
							sx={{
								textDecoration: 'none'
							}}
						>
								ifurungfranco@gmail.com / +63951 007 1964
						</Typography>
					</Stack>
					<Stack direction="row" spacing="10px" alignItems="center">
						<Image alt="linkedin" src={LinkedIn} width={20} height={20} style={{ padding: '5px' }}/>
						<Typography 
							variant="M3/label-small" 
							component="a" 
							href="https://www.linkedin.com/in/francisco-ifurung-7985b6185/"
							sx={{
								textDecoration: 'none'
							}}
						>
							francisco-ifurung-7985b6185
						</Typography>
					</Stack>
					<Stack direction="row" spacing="10px" alignItems="center">
						<Image alt="github" src={Github} width={20} height={20} style={{ padding: '5px' }}/>
						<Typography 
							variant="M3/label-small" 
							component="a" 
							href="https://github.com/lancaster215/"
							sx={{
								textDecoration: 'none'
							}}
						>
							dev-francisco
						</Typography>
					</Stack>
					<Stack direction="row" spacing="10px" alignItems="center">
						<Image alt="landmark" src={Landmark} width={20} height={20} style={{ padding: '5px' }}/>
						<Typography 
							variant="M3/label-small" 
							component="a" 
							href="https://github.com/lancaster215/"
							sx={{
								textDecoration: 'none'
							}}
						>
							Camalig, Albay, Philippines
						</Typography>
					</Stack>
				</Stack>
				<Stack 
					sx={{
						width: ['100%', '50%'],
						alignItems: ['center', 'flex-end'],
						mt: ['50px', '0px']
					}}
				>
					<Typography variant="M3/display">Francisco R. Ifurung</Typography>
					<Typography variant="M3/display">Software Engineer</Typography>
				</Stack>
			</Stack>
			<Stack 
				sx={{
					textAlign: 'center',
					mt: "5vh"
				}}
			>
				<Typography variant="M3/display">© Copyright 2024</Typography>
			</Stack>
		</Stack>
	)
}