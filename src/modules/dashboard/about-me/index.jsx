import { Stack, Typography } from "@mui/material";
import SectionHeaders from "../../components/Section-Headers";
import { GradPic } from "../../../assets/images";
import { useSpring, a} from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

export default function AboutMe() {
  const [flipped, setFlipped] = useState(false);
	const aboutMeRef = useRef();

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

	useEffect(() => {
		if(aboutMeRef.current) {
			localStorage.setItem('aboutMeRef', Math.round(Number(aboutMeRef?.current?.getBoundingClientRect().top)));
		}
	},[aboutMeRef])

	return (
		<Stack id="about-me" ref={aboutMeRef} pb="50vh">
			<SectionHeaders sectionHeaderText="about-me"/>
			<Stack direction={["column", "row"]} pt={["0px", "50px"]}>
				<Stack
					sx={{
						width: ['100%', '100%', '0%'],
						display: ['flex', 'flex', 'none'],
						position: 'relative',
						justifyContent: 'center',
						alignItems: 'center',
						height: ['40vh', '40vh', 'auto']
					}}
          onClick={() => setFlipped((prev) => !prev)}
				>
					<a.div 
						style={{
							width: '200px',
							height: '200px',
							borderRadius: '50%',
							backgroundImage: `url(${GradPic.src})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							zIndex: 1,
							position: 'absolute',
              cursor: 'pointer',
              willChange: transform, opacity,
              opacity: opacity.to(o => 1 - o), transform,
							boxShadow: 'rgb(199 46 240 / 40%) -5px 5px, rgb(199 46 240 / 30%) -10px 10px, rgb(199 68 240 / 20%) -15px 15px, rgb(199 46 240 / 10%) -20px 20px, rgb(199 46 240 / 5%) -25px 25px',
						}}
					/>
          {/* <a.div
						style={{
							width: '200px',
							height: '200px',
							borderRadius: '50%',
							border: '1px solid transparent',
							background: 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)',
							backgroundOrigin: 'border-box',
							backgroundClip: 'border-box',
							position: 'absolute',
							opacity: 0.75,
              cursor: 'pointer',
              willChange: transform, opacity,
              opacity: opacity.to(o => 1 - o), transform
						}}
					/> */}

          <a.div 
						style={{
              opacity,
              transform,
              rotateY: '180deg',
							width: '200px',
							height: '200px',
							borderRadius: '50%',
							backgroundImage: `url(${GradPic.src})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							zIndex: 1,
							position: 'absolute',
              cursor: 'pointer',
              willChange: transform, opacity,
							boxShadow: 'rgb(199 46 240 / 40%) 5px 5px, rgb(199 46 240 / 30%) 10px 10px, rgb(199 68 240 / 20%) 15px 15px, rgb(199 46 240 / 10%) 20px 20px, rgb(199 46 240 / 5%) 25px 25px',
						}}
					/>
				</Stack>
				<Stack
					sx={{
						width: ['100%','100%','50%'],
						zIndex: 10,
					}}
				>
					<Typography variant="M3/display" color="grey.gray" mb="20px">
						Hello, I&apos;m Francis!
						<br/><br/>
						I started my career way back 2019 as junior frontend developer then I got accepted to a new role as a frontend developer. 
						After 2 years, I have been promoted as frontend lead and now deployed to client with latest role as a software engineer.
						<br/><br/>
						I have created numerous projects local and international. Over the years, I have honed my skills and now I am developing one of the leading insurance app in the Philippines!
					</Typography>
				</Stack>
				<Stack
					sx={{
						width: ['100%','100%','50%'],
						display: ['none', 'none', 'block'],
						position: 'relative',
						mt: '100px'
					}}
				>
          <Stack
						style={{
							width: '500px',
							height: '500px',
							borderRadius: '10px',
							backgroundImage: `url(${GradPic.src})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							top: -50,
							right: -50,
							zIndex: 1,
							position: 'absolute',
              // cursor: 'pointer',
              // willChange: transform, opacity,
              // opacity: opacity.to(o => 1 - o), transform,
						}}
					/>
          {/* <a.div
						style={{
							width: '500px',
							height: '500px',
							borderRadius: '50%',
							border: '1px solid transparent',
							background: 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)',
							backgroundOrigin: 'border-box',
							backgroundClip: 'border-box',
							position: 'absolute',
							top: -50,
							right: -50,
							opacity: 0.75,
              cursor: 'pointer',
              willChange: transform, opacity,
              opacity: opacity.to(o => 1 - o), transform
						}}
					/> */}
          {/* <a.div 
						style={{
              opacity,
              transform,
              rotateY: '180deg',
							width: '500px',
							height: '500px',
							borderRadius: '10px',
							backgroundImage: `url(${GradPic.src})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							top: -50,
							right: -50,
							zIndex: 1,
							position: 'absolute',
              cursor: 'pointer',
              willChange: transform, opacity,
						}}
					/> */}
				</Stack>
			</Stack>
		</Stack>
	)
}