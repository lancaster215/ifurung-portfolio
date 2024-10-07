import { Stack, Typography } from "@mui/material";
import CustomButton from "../Button";

export default function Cards(props) {
  const {
    projectImage,
    projectName,
    projectDescription,
    projectScope,
    withLive,
    isSmallCard,
    techStacks,
    skillName,
    sx,
    projectLink,
  } = props;
  
  if(isSmallCard) {
    return (
      <Stack
        sx={{
          border: `1px solid gray`,
          ...sx,
        }}
      >
        <Stack
          sx={{
            border: `1px solid gray`,
            p: '10px'
          }}
        >
          <Typography variant="M3/title-medium">{skillName}</Typography>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            border: `1px solid gray`,
            p: '10px'
          }}
        >
          {techStacks.map((stack) => <Typography key={stack} variant="M3/display" color="grey.gray">{stack}</Typography>)}
        </Stack>
      </Stack>
    )
  }

  return(
    <Stack
      sx={{
        border: `1px solid gray`,
        flexGrow: 1,
        backgroundImage: `url(${projectImage.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'contain',
        display: 'inline-block'
      }}
    >
      <Stack 
        sx={{
          pt: '100px',
          width: '100%',
        }}
      >
        <Stack
          sx={{
            p: '10px',
            borderTop: '1px solid white',
            backgroundColor: 'grey.backgroundGrey'
          }}
        >
          <Typography variant="M3/display"  sx={{fontSize: ['10px', '16px']}} color="grey.gray">{projectScope.join(', ')}</Typography>
        </Stack>
        <Stack
          sx={{
            p: '10px',
            borderTop: '1px solid white',
            backgroundColor: 'grey.backgroundGrey'
          }}
        >
          <Typography variant="M3/headline-small" sx={{fontSize: ['13px', '24px']}}>{projectName}</Typography>
          <Typography variant="M3/display" sx={{fontSize: ['10px', '16px']}} color="grey.gray">{projectDescription}</Typography>
          <Stack mt="10px">
            <CustomButton buttonLink={projectLink} buttonText={withLive ? "Live" : "Website"}/>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}