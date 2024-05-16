import * as tokens from '@connectedhomes/nucleus/build/tokens/es6/tokens.mjs';

const tokensLike = (pattern) => Object.entries(tokens).filter(([key]) => key.startsWith(pattern));
const primaryColors = () => tokensLike('COLOR_PRIMARY_');
const secondaryColors = () => tokensLike('COLOR_SECONDARY_');
const greyscaleColors = () => tokensLike('COLOR_GREYSCALE_');
const systemColors = () => tokensLike('COLOR_SYSTEM_');
const themeColors = () => tokensLike('THEME_COLOR_').filter((token) => {
  const ignoreList = [
    '_PRIVATE',
    '_NEUTRAL_DARK',
    '_NEUTRAL_LIGHT',
    '_500',
    '_COLOR_SYSTEM',
    '_COLOR_PRIMARY',
    '_COLOR_SECONDARY',
    '_COLOR_WARNING',
    '_COLOR_INFORMATION',
    '_COLOR_ERROR',
    '_COLOR_SUCCESS',
    '_COLOR_DISABLED'
  ];

  return !ignoreList.some((ignore) => token[0].includes(ignore));
})

const colors = {
  primary: primaryColors(),
  secondary: secondaryColors(),
  greyscale: greyscaleColors(),
  system: systemColors(),
  theme: themeColors()
};

const borderRadius = () => tokensLike('THEME_BORDER_RADIUS_');
const borderWidth = () => tokensLike('THEME_BORDER_WIDTH_');

const border = {
  radius: borderRadius(),
  width: borderWidth()
};

const systemSize = () => tokensLike('SIZE_').sort((a, b) => parseInt(a[0].split('_')[1]) - parseInt(b[0].split('_')[1]));

const themeSize = () => tokensLike('THEME_SIZE_');

const systemSpacer = () => tokensLike('SPACER_').sort((a, b) => parseInt(a[0].split('_')[1]) - parseInt(b[0].split('_')[1]));

const themeSpacer = () => tokensLike('THEME_SPACER_').sort((a, b) => {
  if (a[0].includes('_NEGATIVE') && !b[0].includes('_NEGATIVE')) {
    return 1;
  } else if (!a[0].includes('_NEGATIVE') && b[0].includes('_NEGATIVE')) {
    return -1;
  }

  return parseInt(a[0].split('_')[2]) - parseInt(b[0].split('_')[2]);
});

const size = {
  system: systemSize(),
  theme: themeSize()
};

const spacer = {
  system: systemSpacer(),
  theme: themeSpacer()
};

const typographyFor = (token) => {
  const tokenPropsArray = tokensLike(`THEME_TYPOGRAPHY_${token}`).map((token) => {
    return {
      [token[0]]: token[1]
    };
  });
  const tokenProps = Object.assign({}, ...tokenPropsArray);
  return {
    tokenFinder: token,
    ...tokenProps
  }
};

const typography = {
  h1: typographyFor('X_LARGE_HEADING'),
  h2: typographyFor('LARGE_HEADING'),
  h3: typographyFor('MEDIUM_HEADING'),
  h4: typographyFor('SMALL_HEADING'),
  h5: typographyFor('X_SMALL_HEADING'),
  h6: typographyFor('TINY_HEADING'),
  'p-large': typographyFor('LARGE_PARAGRAPH'),
  'p-feature': typographyFor('FEATURE_PARAGRAPH'),
  'p-normal': typographyFor('NORMAL_PARAGRAPH'),
  'p-small': typographyFor('SMALL_PARAGRAPH'),
  'p-caption': typographyFor('CAPTION_PARAGRAPH')
}

export { colors, border, typography, size, spacer };