const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '767px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const minWidthDevices = {
  MOBILE_S: `(min-width: ${breakpoints.mobileS})`,
  MOBILE_M: `(min-width: ${breakpoints.mobileM})`,
  MOBILE_L: `(min-width: ${breakpoints.mobileL})`,
  TABLET: `(min-width: ${breakpoints.tablet})`,
  LAPTOP: `(min-width: ${breakpoints.laptop})`,
  LAPTOP_L: `(min-width: ${breakpoints.laptopL})`,
  DESKTOP: `(min-width: ${breakpoints.desktop})`,
  DESKTOP_L: `(min-width: ${breakpoints.desktop})`,
};

const maxWidthDevices = {
  MOBILE_S: `(max-width: ${breakpoints.mobileS})`,
  MOBILE_M: `(max-width: ${breakpoints.mobileM})`,
  MOBILE_L: `(max-width: ${breakpoints.mobileL})`,
  TABLET: `(max-width: ${breakpoints.tablet})`,
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
