const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '520px',
  tabletM: '767px',
  tabletL: '800px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const minWidthDevices = {
  MOBILE_S: `(min-width: ${breakpoints.mobileS})`,
  MOBILE_M: `(min-width: ${breakpoints.mobileM})`,
  MOBILE_L: `(min-width: ${breakpoints.mobileL})`,
  TABLET_S: `(min-width: ${breakpoints.tabletS})`,
  TABLET: `(min-width: ${breakpoints.tabletM})`,
  TABLET_L: `(min-width: ${breakpoints.tabletL})`,
  LAPTOP: `(min-width: ${breakpoints.laptop})`,
  LAPTOP_L: `(min-width: ${breakpoints.laptopL})`,
  DESKTOP: `(min-width: ${breakpoints.desktop})`,
  DESKTOP_L: `(min-width: ${breakpoints.desktop})`,
};

const maxWidthDevices = {
  MOBILE_S: `(max-width: ${breakpoints.mobileS})`,
  MOBILE_M: `(max-width: ${breakpoints.mobileM})`,
  MOBILE_L: `(max-width: ${breakpoints.mobileL})`,
  TABLET_S: `(max-width: ${breakpoints.tabletS})`,
  TABLET: `(max-width: ${breakpoints.tabletM})`,
  TABLET_L: `(max-width: ${breakpoints.tabletL})`,
  LAPTOP: `(max-width: ${breakpoints.laptop})`,
  LAPTOP_L: `(max-width: ${breakpoints.laptopL})`,
  DESKTOP: `(max-width: ${breakpoints.desktop})`,
  DESKTOP_L: `(max-width: ${breakpoints.desktop})`,
};

const devices = {
  minWidth: minWidthDevices,
  maxWidth: maxWidthDevices,
};

export default devices;
