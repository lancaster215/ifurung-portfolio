import { Button, capitalize, Drawer, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HumbergerIcon, Logo } from "../../../../assets/images";

const headerList = [
	{
		name: 'projects',
	},
	{
		name: 'skills',
	},
	{
		name: 'about-me',
	},
	{
		name: 'contact',
	}
]

export default function Header(){
	const [openDrawer, setOpenDrawer] = useState();
	const [urlId, setUrlId] = useState();

	useEffect(() => {
		const handleScroll = () => {
			const url = window.location.href;
			setUrlId(url?.split('#')[1])
		}
		typeof window !== 'undefined' && window.addEventListener('scroll', handleScroll)
		handleScroll();

		return () => typeof window !== 'undefined' && window.removeEventListener('scroll', handleScroll)
	}, [])

	const toggleDrawer = () => {
		setOpenDrawer((prev) => !prev);
	}

	return(
		<Stack 
			sx={{
				position: 'fixed', 
				width: '100%',
				marginLeft: '-10px',
				alignItems: 'center', 
				zIndex: '100', 
				backgroundColor: 'grey.backgroundGrey',
				pt: '4vh',
				pb: '2vh',
				mt: '-2vh',
				boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
			}}
		>
			<Stack direction="row" sx={{ width: '80%' }}>
				<Stack 
					sx={{
						maxWidth: '50%',
						width: '50%',
						position: "relative",
						alignItems: 'center',
						paddingLeft: '20px'
					}}
					direction="row"
					spacing="10px"
				>
					<Stack 
						sx={{
							width: '20px',
							height: '20px',
							backgroundImage: `url(${Logo.src})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							left: 0,
							zIndex: 1,
							position: 'absolute',
						}}
					/>
					<Typography variant="M3/display-bold">dev-francis</Typography>
				</Stack>
				{/* Mobile view Drawer */}
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
						<Image alt="humberger-icon" src={HumbergerIcon} width={20} height={20} />
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
									<ListItem key={list.name} sx={{py: '3vh', position: 'relative'}}>
										<Typography component="a" href={`#${list.name}`} variant="M3/display" sx={{ textDecoration: 'none' }}>{capitalize(list.name)}</Typography>
										{urlId === list.name &&
											<Stack 
												sx={{
													position: 'absolute',
													left: '5px',
													width: '1%',
													height: '100%',
													backgroundColor: 'pink.hotPink',
													boxShadow: 'rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px'
												}}
											/>
										}
									</ListItem>
								))}
							</List>
						</Stack>
					</Drawer>
				</Stack>
				{/* Desktop view Header */}
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
							key={list.name}
							sx={{ 
								cursor: 'pointer',
								position: 'relative',	
							}}
						>
							<Typography component="a" href={`#${list.name}`} variant="M3/display" sx={{ textDecoration: 'none' }}>
								<Typography variant="M3/display" component="span" color="pink.hotPink">#</Typography>{list.name}
							</Typography>
							{urlId === list.name && 
								<Stack 
									sx={{
										position: 'absolute',
										bottom: '-20px',
										width: '100%',
										height: '5px',
										backgroundColor: 'pink.hotPink',
										boxShadow: 'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;'
									}}
								/>
							}
						</Stack>
					)}
				</Stack>
			</Stack>
		</Stack>
	)
}