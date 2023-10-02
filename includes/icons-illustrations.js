import { icons, illustrations } from 'nucleus-util/brands/british-gas';
import React from 'react';

const iconographyNaming = (icons) => {
  return icons.map((icon) => icon.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()).sort().map((icon) => <span><code>{icon}</code><span>, </span></span>);
};

export const Icons = () => {
  return iconographyNaming(icons);
};

export const Illustrations = () => {
  return iconographyNaming(illustrations);
};
