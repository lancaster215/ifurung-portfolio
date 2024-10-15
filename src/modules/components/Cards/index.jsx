import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { forwardRef } from "react";

const Cards = forwardRef(
  ({
    projectImage,
    projectName,
    projectDescription,
    projectScope,
    isSmallCard,
    techStacks,
    skillName,
    sx,
    projectLink,
  }, ref ) => {

  if(isSmallCard) {
    return (
      <Stack
        ref={ref}
        sx={{
          background: 'rgba(255, 255, 255, 0.19)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(11.5px)',

          ...sx,
        }}
      >
        <Stack
          sx={{
            p: '10px'
          }}
        >
          <Typography variant="M3/headline-semibold" fontSize={['24px', '32px']}>{skillName}</Typography>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            p: '10px'
          }}
        >
          {techStacks.map((stack) => <Typography key={stack} variant="M3/headline-small" color="grey.gray" fontSize={['18px', '24px']}>{stack}</Typography>)}
        </Stack>
      </Stack>
    )
  }

  return(
    <Stack
      sx={{
        border: `1px solid gray`,
        borderRadius: '10px',
        flexGrow: 1,
        display: 'inline-block',
        width: ['100%', 'calc(100% / 4)'],
        position: 'relative',
        padding: '10px',

        '&:hover': {
          boxShadow: 'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px',
          transition: 'box-shadow 0.3s ease-in',
          transitionDelay: '0.3s',
        }
      }}
    >
      <Image 
        alt={projectImage.src}
        src={projectImage.src}
        width={300}
        height={300}
        style={{
          width: '100%',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
      />
      <Stack
        sx={{
          p: '10px',
          // backgroundColor: 'rgb(40 44 51 / 44%)',
          justifyContent: 'space-around',
        }}
        direction='row'
      >
        {projectScope.map((stack) => 
          <Image alt={stack} key={stack} src={stack} width="auto" height={25} />
        )}
      </Stack>
      <Stack
        sx={{
          p: '10px',
          borderTop: '1px solid white',
          // backgroundColor: 'grey.backgroundGrey',
          borderRadius: '0px 0px 10px 10px',
        }}
      >
        <Stack direction="row" sx={{justifyContent: 'space-between'}}>
          <Typography variant="M3/headline-small" sx={{fontSize: ['13px', '24px']}}>{projectName}</Typography>
          <Typography component="a" target="_blank" href={projectLink} sx={{ textDecoration: 'none' }} color="white">{'~>'}</Typography>
        </Stack>
        <Typography variant="M3/display" sx={{fontSize: ['10px', '16px']}}>{projectDescription}</Typography>
      </Stack>
    </Stack>
  )
});

Cards.displayName = "Cards";

export default Cards