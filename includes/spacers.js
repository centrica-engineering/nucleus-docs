import React from 'react';
import { spacer } from '../tokens/ns-tokens'


const generatePalette = (spacers) => {
  const entries = Object.entries(spacers);

  let paletteHtml = '';

  for (const [key, data] of entries) {

    paletteHtml += `
    <div class="spacer">
      <div class="name">${data.name}</div>
      <div class="swatch" style="width:${data.value}; height:${data.value};"></div>
    </div>
    `
  }

  return `<dl class="spacer-palette">${paletteHtml}</dl>`;
}

export const Spacers = ({...props}) => {
  const spacerHtml = generatePalette(spacer);

  return (
    <div dangerouslySetInnerHTML={{ __html: spacerHtml }} />
  )
};
