import * as tokens from '../../node_modules/@connectedhomes/nucleus/ext/@muonic/muon/build/tokens/es6/muon-tokens';

const tokensLike = (pattern) => Object.entries(tokens).filter(([key]) => key.startsWith(pattern));
const primaryColors = () => tokensLike('COLOR_PRIMARY_');
const secondaryColors = () => tokensLike('COLOR_SECONDARY_');
const greyscaleColors = () => tokensLike('COLOR_GREYSCALE_');
const systemColors = () => tokensLike('COLOR_SYSTEM_');

export { primaryColors, secondaryColors, greyscaleColors, systemColors };