import { Button, Link, Typography } from "@mui/material"

export default function CustomButton(props) {
	const { buttonText, buttonLink } = props;
	return (
		<Button
			component={Link}
			href={buttonLink}
			sx={{
				border: '1px solid #C778DD',
				width: '60%',
				textTransform: 'none',
			}}
		>
			<Typography variant="M3/display">{buttonText}</Typography>
		</Button>
	)
}