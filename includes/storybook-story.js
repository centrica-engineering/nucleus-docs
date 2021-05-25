import React from 'react';

export const StorybookStory = ({...props}) => {
  
  if (props.story.includes('--')) {
    let storyUrl = props.story.includes('nsx') ? `https://www.britishgas.co.uk/nucleus-experiences/demo/index.html?path=/story/${props.story}` : `https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/${props.story}`;

    return (
      <div class="storybook-embed">
        <p>View example on <a href={ storyUrl }>Storybook</a></p>
        <iframe
          src={ `${storyUrl}&nav=0` }
          title={ `Nucleus: ${props.story}` }
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
      )
  }
};
