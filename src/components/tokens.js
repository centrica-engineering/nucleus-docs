import * as tokens from '../../node_modules/@connectedhomes/nucleus/ext/@muonic/muon/build/tokens/es6/muon-tokens';

const tokensLike = (pattern) => Object.entries(tokens).filter(([key]) => key.startsWith(pattern));
const primaryColors = () => tokensLike('COLOR_PRIMARY_');
const secondaryColors = () => tokensLike('COLOR_SECONDARY_');
const greyscaleColors = () => tokensLike('COLOR_GREYSCALE_');
const systemColors = () => tokensLike('COLOR_SYSTEM_');

const colors = {
  primary: primaryColors(),
  secondary: secondaryColors(),
  greyscale: greyscaleColors(),
  system: systemColors()
};

const borderRadius = () => tokensLike('THEME_BORDER_RADIUS_');
const borderWidth = () => tokensLike('THEME_BORDER_WIDTH_');

const border = {
  radius: borderRadius(),
  width: borderWidth()
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

export { colors, border, typography };