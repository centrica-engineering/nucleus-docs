import React from 'react';
import { colour } from '../tokens/ns-tokens'


const generatePallette = (colours) => {
  const entries = Object.entries(colours);

  let palletteHtml = '';

  for (const [key, data] of entries) {

    palletteHtml += `
    <div class="colour">
      <dt>
        <div style="background-color:${data.value}" class="swatch"></div>
        <span class='colour-name'>${data.name}</span>
      </dt>
      <dd>${data.value}</dd>
    </div>
    `
  }

  return `<dl class="colour-pallete">${palletteHtml}</dl>`;
}

export const Colours = ({...props}) => {
  const colourHtml = generatePallette(colour[props.colourGroup]);

  return (
    <div dangerouslySetInnerHTML={{ __html: colourHtml }} />
  )
};
