import { Button, Link, Typography } from "@mui/material"

export default function CustomButton(props) {
	const { buttonText, buttonLink, sx } = props;
	return (
		<Button
			component={Link}
			href={buttonLink}
			sx={{
				border: '1px solid #C778DD',
				width: ['40%', '60%'],
				textTransform: 'none',
				...sx,
			}}
		>
			<Typography variant="M3/display" fontSize={['12px', '16px']}>{buttonText}</Typography>
		</Button>
	)
}