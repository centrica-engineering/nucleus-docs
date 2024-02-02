import * as tokens from '../../node_modules/@connectedhomes/nucleus/ext/@muonic/muon/build/tokens/es6/muon-tokens';

const tokensLike = (pattern) => Object.entries(tokens).filter(([key]) => key.startsWith(pattern)).map(([key, value]) => {
  key = key.substring(key.lastIndexOf('_') + 1, key.length);
  return [
    key, value
  ]
});
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

export { colors, border };