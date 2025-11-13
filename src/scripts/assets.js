import { icons, illustrations } from '@connectedhomes/nucleus-util/brands/british-gas';
import { blacklist } from '../data/blacklist.json';

const iconographyNaming = (iconNames) => iconNames.map((icon) => {
  let iconName = icon.name;
  while (iconName !== iconName.toLowerCase()) {
    iconName = iconName.replace(/([A-Z])/g, (g) => `-${g.toLowerCase()}`);
  }
  return {
    name: iconName,
    svg: icon.svg
  };
});

const iconOptions = () => iconographyNaming(icons).filter((icon) => !blacklist.icon.includes(icon.name));
const illustrationOptions = () => iconographyNaming(illustrations).filter((illustration) => !blacklist.illustration.includes(illustration.name));

export { iconOptions, illustrationOptions };
