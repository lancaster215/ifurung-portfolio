import { Stack, Typography } from "@mui/material";
import CustomButton from "../../components/Button";
import { useTrail, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const styles = {
	hooksMain: {
		filter: `url(#goo)`,
		overflow: 'hidden',
		background: 'transparent',
		'-webkit-touch-callout': 'none',
		'-webkit-user-select': 'none',
		'-khtml-user-select': 'none',
		'-moz-user-select': 'none',
		'-ms-user-select': 'none',
		userSelect: 'none',
		cursor: 'default',

		'& div': {
			position: 'absolute',
			willChange: 'transform',
			borderRadius: '50%',
			background: '#C778DD',
			boxShadow: '10px 10px 5px 0px rgba(0, 0, 0, 0.75)',
			opacity: 0.6,
		},

		'& div:nth-child(1)': {
			width: '60px',
			height: '60px',
		},
		
		'& div:nth-child(2)': {
			width: '125px',
			height: '125px',
		},
		
		'& div:nth-child(3)': {
			width: '75px',
			height: '75px',
		},

		'& div::after': {
			content: "''",
			position: 'absolute',
			top: '20px',
			left: '20px',
			width: '20px',
			height: '20px',
			borderRadius: '50%',
			background: 'rgba(255, 255, 255, 0.8)',
		},
		
		'& div:nth-child(2)::after': {
			top: '35px',
			left: '35px',
			width: '35px',
			height: '35px',
		},
		
		'& div:nth-child(3)::after': {
			top: '25px',
			left: '25px',
			width: '25px',
			height: '25px',
		},
	}
}

export default function SplashContent() {
	const [trail, api] = useTrail(3, i => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }))
	const [ref, { left, top }] = useMeasure();
	const handleMouseMove = e => {
    api.start({ xy: [e.clientX - left, e.clientY - top] })
  }

	return (
		<Stack mt="100px" direction={['column', 'row', 'row']} pt="20px" pb="20vh" sx={{position: 'relative'}}>
			<svg style={{ position: 'absolute', width: 0, height: 0}}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
			<Stack
				component="div"
				sx={{
					width: '100%',
					position: 'absolute',
					height: '50vh',
					
					...styles.hooksMain
				}}
				spacing="20px"
				ref={ref}
				onMouseMove={handleMouseMove}
			>
				{trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.to(trans) }} />
        ))}
			</Stack>
			<Stack
				sx={{
					maxWidth: ['100%', '50%', '50%'],
					width: ['100%', '50%', '50%'],
					mt: '10vh',
				}}
				gap="20px"
			>
				<Stack>
					<Typography variant="M3/headline-bold" color="pink.hotPink" component="p">
						<Typography variant="M3/headline-bold" >I&apos;m</Typography>{' '}Francis
						<Typography variant="M3/headline-bold" >, a</Typography><br/>
						{' '}software engineer
					</Typography>
				</Stack>
				<Stack sx={{ mb: '10px' }}>
					{/* <Typography variant="M3/title-medium" color="grey.gray">I develop application with robust functionality for both <br/> national and international clients.</Typography> */}
					<Typography variant="M3/title-medium" color="grey.gray">I have years of developing robust applications <br/> for both local and international clients.</Typography>
				</Stack>
				<Stack>
					<CustomButton buttonLink={"#contact"} buttonText={"Contact Me"}/>
				</Stack>
			</Stack>
		</Stack>
	)
}