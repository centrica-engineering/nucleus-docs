import React from 'react';

export const StorybookStory = ({...props}) => {
  
  if (props.story.includes('--')) {
    let storyUrl = props.story.includes('nsx') ? `https://main--63ea3fa8c3721b415537bccc.chromatic.com?path=/story/${props.story}` : `https://main--63ea3fa8c3721b415537bccc.chromatic.com?path=/story/${props.story}`;

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
