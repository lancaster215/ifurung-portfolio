import { Stack, Typography } from "@mui/material";
import SectionHeaders from "../../components/Section-Headers";
import Cards from "../../components/Cards";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, animated, useTransition } from "@react-spring/web";
import Draggable from "react-draggable";
import { TypeAnimation } from "react-type-animation";
import { FiraCode } from "../../../assets/fonts";

const skills = [
  { skill: "Languages", set: ['JavaScript'] },
  { skill: "Database", set: ["MongoDB", "PostgreSQL"] },
  { skill: "Backend Technologies", set: ["NodeJS", "ExpressJS"] },
  { skill: "UI Libraries", set: ["MUI", "AntD"] },
  { skill: "API", set: ["REST API"] },
  { skill: "CMS", set: ["Wordpress", "Zesty"] },
  { skill: "Testing", set: ["Jest", "Selenium"] },
  { skill: "Version Control", set: ["Git"] },
];

const AnimatedLine = ({ from, to, delay }) => {
  const lineAnimation = useSpring({
    from: { x1: from.x, y1: from.y, x2: from.x, y2: from.y },
    to: { x1: from.x, y1: from.y, x2: to.x, y2: to.y },
    config: { duration: 1000 },
    // delay: delay,  // Add delay to stagger animations
  });

  return (
    <animated.line
      x1={lineAnimation.x1}
      y1={lineAnimation.y1}
      x2={lineAnimation.x2}
      y2={lineAnimation.y2}
      stroke="white"
      strokeWidth={5}
    />
  );
};

export default function Skills() {
  const [scrollPosition, setScrollPosition] = useState();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [textAnimate, setTextAnimate] = useState(false);
  const [lines, setLines] = useState([]);
  const [items, setItems] = useState([])
  const [isMobile, setIsMobile] = useState(false);
  
  const boxRefs = useRef([]);
	const svgRef = useRef(null);
  const ref = useRef([]);
  const skillsRef = useRef();	

  const skillsRefRectTop = Math.round(Number(skillsRef?.current?.getBoundingClientRect().top));
  const viewportWidth = typeof window !== 'undefined' && window.innerWidth;
  
  const recalculateLines = () => {
    if (boxRefs.current.length === 0 || !svgRef.current) return;

		const svgRect = svgRef.current.getBoundingClientRect();

    const boxPositions = boxRefs.current.map((box) => {
      const rect = box.getBoundingClientRect();

      // Calculate the position relative to the svg container
      return {
        x: rect.left + rect.width / 2 - svgRect.left,
        y: rect.top + rect.height / 2 - svgRect.top,
      };
    });
    const generatedLines = [];
    for (let i = 0; i < boxPositions.length - 1; i++) {
      generatedLines.push({
        from: boxPositions[i],
        to: boxPositions[i + 1],
      });
    }
    setLines(generatedLines);
  };

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(400px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  })

  useEffect(() => {
		if(skillsRef.current) {
			localStorage.setItem('skillsRef', skillsRefRectTop);
		}
	},[skillsRef, skillsRefRectTop]);

  useEffect(() => {
    const animationState = localStorage.getItem('skillsAnimated');
    if (Boolean(animationState)) {
      setHasAnimated(true);
    }

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Call on mount

      // On page refresh, reset animation flag
      window.onbeforeunload = () => {
        localStorage.removeItem('skillsAnimated');
      };
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  useEffect(() => {
    if(skillsRefRectTop > 0 && skillsRefRectTop < 500) {
      setTextAnimate(true)
    }

    if (skillsRefRectTop === 0 && !hasAnimated) {
      localStorage.setItem('skillsAnimated', 'true');
      setHasAnimated(true);
    }

    // Recalculate lines after cards become visible
    recalculateLines();
  }, [skillsRefRectTop, hasAnimated, boxRefs.current.length]);

  useEffect(() => {
    if(Number(viewportWidth) < 800) {
      setIsMobile(true);
    }
  },[viewportWidth])
	

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    setItems([])
    ref.current.push(setTimeout(() => setItems(['Honing', 'character', 'that best suit the market']), 2000))
    ref.current.push(setTimeout(() => setItems(['Honing', 'skills']), 5000))
    ref.current.push(setTimeout(() => setItems(['Honing', 'skills', 'that best suit the market']), 5000))
  },[]);
  
  useEffect(() => {
    if(textAnimate) {
      reset()
    }
    return () => ref.current.forEach(clearTimeout);
  }, [textAnimate, reset])

	const handleDrag = (index) => (e, data) => {
    recalculateLines();
  };

  return (
    <Stack id="skills" ref={skillsRef}>
      <SectionHeaders sectionHeaderText="skills" />
      <Stack 
        sx={{
          alignItems: ['left', 'center'],
          my: '10vh',
          display: 'ruby',
          textAlignLast: ['left', 'center'],
          width: '100%'
        }}
      >
        {/* {textAnimate && <Typography component="span" variant="M3/headline-semibold">"</Typography>}
        {transitions(({ innerHeight, ...style }, item, text, index) => (
          <animated.div
            className={{
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'flex-start',
              alignTtems: 'center',
              fontSize: '4em',
              fontWeight: 800,
              willChange: 'transform, opacity, height',
              whiteSpace: 'nowrap',
              lineHeight: '80px',
            }} 
            style={style}
          >
            <animated.div style={{ height: innerHeight, marginRight: index !== 2 && '1pc' }}>
              <Typography variant="M3/headline-semibold">{item}</Typography>
            </animated.div>
          </animated.div>
        ))}
        {textAnimate && <Typography component="span" variant="M3/headline-semibold">"</Typography>} */}
        <TypeAnimation
          cursor={false}
          sequence={[
            'Honing ',
            1000,
          ]}
          speed={50}
          style={{ 
            fontWeight: 600,
            fontSize: '32px',
            color: '#ffffff',
            fontFamily: [FiraCode.style.fontFamily, 'sans-serif'].join(',')
          }}
        />
        <TypeAnimation
          cursor={false}
          sequence={[
            'character',
            1000,
            'skills',
            1000,
          ]}
          speed={200}
          style={{ 
            fontWeight: 600,
            fontSize: '32px',
            color: '#C778DD',
            fontFamily: [FiraCode.style.fontFamily, 'sans-serif'].join(',')
          }}
          repeat={Infinity}
        />
        <TypeAnimation
          cursor={false}
          sequence={[
            ' that best suit the market',
            1000,
          ]}
          speed={50}
          style={{ 
            fontWeight: 600,
            fontSize: '32px',
            color: '#ffffff',
            fontFamily: [FiraCode.style.fontFamily, 'sans-serif'].join(',')
          }}
        />
      </Stack>
      <Stack direction="row" pt="50px">
        <Stack
          sx={{
            maxWidth: '100%',
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            flexDirection: ["row", "row-reverse"],
            position: 'relative',
          }}
          direction="row"
          gap="50px"
        >
					<svg ref={svgRef} style={{ position: 'absolute', height: isMobile ? '130vh' : '100vh', width: isMobile ? '80%' : '100vw' }}>
						{lines.map((line, index) => (
							<AnimatedLine 
								key={index} 
								from={line.from} 
								to={line.to} 
								// delay={index * 500} // Increase delay for each line
							/>
						))}
					</svg>
          {skills.map((skill, index) => (
						<Draggable
							key={index}
							onDrag={handleDrag(index)}
						>
							<Stack>
								<Cards
									ref={(el) => (boxRefs.current[index] = el)}
									key={skill.skill}
									sx={{
										opacity: scrollPosition >= (1000 + (index * 90)) || hasAnimated ? 1 : 0,
										transition: 'opacity 2s ease-in-out',
										backgroundColor: 'grey.backgroundGrey',
										zIndex: 1,
									}}
									isSmallCard={true}
									skillName={skill.skill}
									techStacks={skill.set}
								/>
							</Stack>
						</Draggable>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}