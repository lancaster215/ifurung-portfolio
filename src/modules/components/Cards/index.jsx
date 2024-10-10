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
          <Typography variant="M3/headline-semibold">{skillName}</Typography>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            border: `1px solid gray`,
            p: '10px'
          }}
        >
          {techStacks.map((stack) => <Typography key={stack} variant="M3/headline-small" color="grey.gray">{stack}</Typography>)}
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
        height: '40vh',
        width: '30%',
        position: 'relative',

        '&:hover': {
          boxShadow: 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px',
          transition: 'box-shadow 0.3s ease-in',
          transitionDelay: '0.3s',
        }
      }}
    >
      <Stack
        sx={{
          borderRadius: '10px 10px 0px 0px',
          overflow: 'hidden',
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
          }}
        />
      </Stack>
      <Stack 
        sx={{
          pt: '100px',
          width: '100%',
          position: 'absolute',
          bottom: 0,
          minHeight: ['15vh', '20vh'],
        }}
      >
        <Stack
          sx={{
            p: '10px',
            borderTop: '1px solid white',
            backgroundColor: 'rgb(40 44 51 / 44%)',
            justifyContent: 'space-around',

            '&:hover': {
              backgroundColor: 'rgb(40 44 51 / 70%)',
              transition: 'background-color 0.3s ease-in',
              transitionDelat: '0.3s',
            }
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
            backgroundColor: 'grey.backgroundGrey',
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
    </Stack>
  )
});

Cards.displayName = "Cards";

export default Cards