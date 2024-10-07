import { Button, capitalize, Drawer, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { HumbergerIcon, Selfie } from "../../../../assets/images";

const headerList = [
	'projects',
	'skills',
	'about-me',
	'contact',
]

export default function Header(){
	const [openDrawer, setOpenDrawer] = useState();

	const toggleDrawer = () => {
		setOpenDrawer((prev) => !prev);
	}

	return(
		<Stack 
			sx={{
				position: 'fixed', 
				width: '100%', 
				alignItems: 'center', 
				zIndex: '100', 
				backgroundColor: 'grey.backgroundGrey',
				py: '2vh',
				mt: '-2vh',
			}}
		>
			<Stack direction="row" sx={{ width: '80%' }}>
				<Stack 
					sx={{
						maxWidth: '50%',
						width: '50%',
						position: "relative",
						alignItems: 'center',
					}}
					direction="row"
					spacing="10px"
				>
					<Stack 
						sx={{
							width: '50px',
							height: '50px',
							borderRadius: '50%',
							backgroundImage: `url(${Selfie.src})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							left: 0,
							zIndex: 1,
							// position: 'absolute',
						}}
					/>
					<Stack
						sx={{
							position: 'absolute',
							width: '50px',
							height: '50px',
							borderRadius: '50%',
							border: '1px solid transparent',
							background: 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)',
							backgroundOrigin: 'border-box',
							backgroundClip: 'border-box',
							left: -12,
							opacity: 0.75
						}}
					/>
					<Typography variant="M3/display-bold">dev-francis</Typography>
				</Stack>
				<Stack
					sx={{
						justifyContent: 'flex-end',
						display: ['flex', 'flex', 'none'],
						alignItems: 'flex-end',
						position: 'relative',
						maxWidth: '50%',
						width: '50%',
					}}
				>
					<Button onClick={toggleDrawer}>
						<Image src={HumbergerIcon} width={20} height={20} />
					</Button>
					<Drawer
						anchor={'right'}
						open={openDrawer}
						onClose={toggleDrawer}
						sx={{ 
							width: '50%', 
							'& .MuiPaper-root': {
								width: '50%',
							}
						}}
					>
						<Stack>
							<List>
								{headerList.map((list) => (
									<ListItem key={list} sx={{py: '3vh'}}>
										<Typography component="a" href={`#${list}`} variant="M3/display" sx={{ textDecoration: 'none' }}>{capitalize(list)}</Typography>
									</ListItem>
								))}
							</List>
						</Stack>
					</Drawer>
				</Stack>
				<Stack 
					sx={{
						maxWidth: '50%',
						width: '50%',
						justifyContent: 'flex-end',
						display: ['none', 'none','flex'],
						alignItems: 'center'
					}}
					direction="row"
					spacing="20px"
				>
					{headerList.map((list) => 
						<Stack 
							sx={{ 
								cursor: 'pointer'
							}}
						>
							<Typography component="a" href={`#${list}`} variant="M3/display" sx={{ textDecoration: 'none' }}>
								<Typography variant="M3/display" component="span" color="pink.hotPink">#</Typography>{list}
							</Typography>
						</Stack>
					)}
				</Stack>
			</Stack>
		</Stack>
	)
}