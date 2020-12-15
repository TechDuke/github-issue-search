// import { orange } from '@material-ui/core/colors';
// import { grey /* green, red */ } from '@material-ui/core/colors';

/**
 * Constants used in UI and Material-UI theme palette overrides of their Default Theme.
 */


// REFERENCES:
// Material-UI colors:
//    https://material-ui.com/style/color/
//    https://www.materialui.co/colors

/* ==================Material-UI==============
Override Material-UI's Default Theme:
  https://material-ui.com/customization/default-theme/
  View default Typography: https://material-ui.com/style/typography/
Our Theme:
  Purple/Gray theme:
  https://www.material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=9575CD&secondary.color=E0E0E0
*/

const customTheme = {
  // Custom colors outside the Default Theme
  techduke: {
    primary: {
      light: '#c8bcd6',
      main: '#987aaf', // purple
      yummyPlum: '#6d5496',
      plum1: '#5f4983', // primary.dark
      plum2: '#6d5496', // yummyPlum
      plum3: '#8367b1', // primary.main
      plum4: '#a184d1',
      plum5: '#bca4e2', // primary.light
      sand1: '#e5c674',
      sand2: '#e5cc8a',
      sand3: '#e5cf95',
      sand4: '#e5d2a0',
      sand5: '#d6b357',
      sand6: '#c8a343',
    },
  },

  // Override default theme's palette values (by defining a palette object)
  palette: {
    primary: {
      light: '#f9f5ff',
      mediumLight: '#bca4e2',
      main: '#8367b1',
      dark: '#5f4983',
      contrastText: '#fff', // e.g. color of AppBar child Button text to inherit, etc.
    },
    secondary: {
      light: '#ffffff',
      main: '#e0e0e0',
      dark: '#aeaeae',
      contrastText: '#000',
    },
    // primary: {
    //   light: '#c6a3ff',
    //   main: '#9474cc', // purple
    //   dark: '#64489b',
    //   contrastText: '#fff', // e.g. color of AppBar child Button text to inherit, etc.
    // },
    // secondary: {
    //   light: '#ffffff',
    //   main: '#e0e0e0',
    //   dark: '#aeaeae',
    //   contrastText: '#000',
    // },
    // TODO: Override these default error palette colors? Orange instead?
    // error: {
    //   orange: orange.A100,
    //   lightOrange: orange[100],
    //   light: '#e57373',
    //   main: '#f44336',
    //   dark: '#d32f2f',
    //   contrastText: '#fff',
    // },

    // background: {
    //   paper: '#fff',
    //   default: '#fafafa',
    // },
  },

  // See default fonts: https://material-ui.com/style/typography/
  // Override default theme's typography values
  // typography: {
  //   fontFamily: '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  //   fontFamily: '"Lato", "Helvetica Neue", Helvetica, Arial, sans-serif',  // From planningcenter.com
  //   fontWeightMedium: 500,
  //   body1: {
  //     fontWeight: 500,
  //   },
  //   button: {
  //     fontStyle: 'italic',
  //   },
  // },

  // TODO: Add optional custom theme styles: https://material-ui-next.com/customization/themes/#adding-custom-style
  // TODO: Example Usage: theme.status.danger
  // status: {
  //   danger: 'orange', // OR orange[500].
  // },

  // TODO: Optionally Customizing all instances of a component type by using 'overrides' key of the theme:
  // TODO: https://material-ui-next.com/customization/themes/#customizing-all-instances-of-a-component-type
  // overrides: {
  //   MuiButton: {
  //     // Name of the styleSheet
  //     root: {
  //       // Name of the rule
  //       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  //       borderRadius: 3,
  //       border: 0,
  //       color: 'white',
  //       height: 48,
  //       padding: '0 30px',
  //       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  //     },
  //   },
  // },
};

// export const customTheme2 = {
//   pcPurple: { // planningcenter.com
//     light: '#a89baf',
//     main: '#8a6b97',
//     medium: '#8b7894',
//     mainDark: '#82668e',
//     dark: '#705679',
//     extraDark: '#6b506f',
//     accent: '#e7a642',
//     contrastText: '#fff',
//   },
// };

export default customTheme;
