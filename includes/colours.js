import React from 'react';
import { colour } from '../tokens/ns-tokens'


const generatePalette = (colours) => {
  const entries = Object.entries(colours);

  let paletteHtml = '';

  for (const [key, data] of entries) {

    paletteHtml += `
    <div class="colour">
      <dt>
        <div style="background-color:${data.value}" class="swatch"></div>
        <span class='colour-name'>${data.name}</span>
      </dt>
      <dd>${data.value}</dd>
    </div>
    `
  }

  return `<dl class="colour-palette">${paletteHtml}</dl>`;
}

export const Colours = ({...props}) => {
  const colourHtml = generatePalette(colour[props.colourGroup]);

  return (
    <div dangerouslySetInnerHTML={{ __html: colourHtml }} />
  )
};
