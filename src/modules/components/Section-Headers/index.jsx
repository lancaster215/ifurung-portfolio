import { Stack, Typography } from "@mui/material";

export default function SectionHeaders(props) {
	const { sectionHeaderText } = props;
	return (
		<Stack 
			direction="row" 
			sx={{ 
				position: 'relative', 
				alignItems: 'center'
			}}
		>
			<Stack 
				sx={{
					pt: ['11vh', '10vh'],
					maxWidth: '100%',
					width: '100%',
				}}
			>
				<Typography variant="M3/headline-semibold">
					<Typography sx={{fontSize: '32px', fontWeight: 700}} component="span" color="pink.hotPink">#</Typography>
					{sectionHeaderText}
					<Typography 
						sx={{
							fontSize: '32px',
							fontWeight: 300,
							ml: '50px',
							display: ['none', 'none', 'inline']
						}} 
						component="span" 
						color="pink.hotPink"
					>
						-----------------------
					</Typography>
				</Typography>
			</Stack>
		</Stack>
	)
}