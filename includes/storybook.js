import React from 'react';

export const Storybook = ({...props}) => (
  <div>
    <p>To see examples visit <a href={ `https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/${props.story}` }>Storybook</a></p>
    <iframe
    src={ `https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/${props.story}&nav=0` }
    title={ `Nucleus: ${props.story}` }
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
  </div>
);