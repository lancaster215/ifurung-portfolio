import { createTheme } from "@mui/material";
import { FiraCode } from "../../assets/fonts";
import _var from '../colors';

const theme = createTheme({
	palette: {
		mode: 'dark',
		common: {
			black: _var['--common-black'],
			main: _var['--common-black'],
			white: _var['--common-white'],
		},
		grey: {
			gray: _var['--common-gray'],
			backgroundGrey: _var['--common-dark-background'],
		},
		pink: {
			hotPink: _var['--common-hot-pink'],
		}
	},
	typography: {
		fontFamily: [FiraCode.style.fontFamily, 'sans-serif'].join(','),
    'M3/label-small': {
      fontWeight: 300,
			fontSize: '11px',
			lineHeight: 'auto',
			color: _var['--common-white'],
			fontFamily: [FiraCode.style.fontFamily, 'sans-serif'].join(',')
    },
		'M3/display': {
			fontWeight: 300,
			fontSize: '16px',
			lineHeight: 'auto',
			color: _var['--common-white'],
			fontFamily: [FiraCode.style.fontFamily, 'sans-serif'].join(',')
		},
		'M3/display-bold': {
			fontWeight: 700,
			fontSize: '16px',
			lineHeight: 'auto',
			color: _var['--common-white'],
			fontFamily: [FiraCode.style.fontFamily, 'sans-serif'].join(',')
		},
		'M3/headline-small': {
			fontWeight: 400,
			fontSize: '24px',
			lineHeight: 'auto',
			color: _var['--common-white'],
			fontFamily: [FiraCode.style.fontFamily, 'sans-serif'].join(','),
		},
		'M3/headline-semibold': {
			fontWeight: 600,
			fontSize: '32px',
			lineHeight: 'auto',
			color: _var['--common-white'],
			fontFamily: [FiraCode.style.fontFamily, 'sans-serif'].join(',')
		},
		'M3/title-medium': {
			fontWeight: 300,
			fontSize: '16px',
			lineHeight: 'auto',
			color: _var['--common-white'],
			fontFamily: [FiraCode.style.fontFamily, 'sans-serif'].join(',')
		}
	},
  breakpoints: {
    values: {
      xs: 376,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

export default theme;