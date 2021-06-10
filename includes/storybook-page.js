import React from 'react';

export const StorybookPage = ({...props}) => {
  
  if (props.story.includes('--')) {
    let storyUrl = props.story.includes('nsx') ? `https://www.britishgas.co.uk/nucleus-experiences/demo/iframe.html?id=${props.story}&viewMode=story` : `https://www.britishgas.co.uk/nucleus/demo/iframe.html?id=${props.story}&viewMode=story`;

    return (
      <div class="storybook-embed page">
        <p><a href={ storyUrl }>View full page example</a></p>
        <iframe
          src={ `${storyUrl}&nav=0` }
          title={ `Nucleus: ${props.story}` }
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
      )
  }
};
