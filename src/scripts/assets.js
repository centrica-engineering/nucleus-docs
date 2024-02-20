import { icons, illustrations } from '@connectedhomes/nucleus-util/brands/british-gas';

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

const iconOptions = () => iconographyNaming(icons);
const illustrationOptions = () => iconographyNaming(illustrations);

export { iconOptions, illustrationOptions };