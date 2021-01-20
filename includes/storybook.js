import React from 'react';

export const Storybook = ({...props}) => {
  
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

  if (props.story.includes('-')) {
    return (
      <div style={{
        borderLeft: '16px solid red',
        backgroundColor: '#fdedea',
        padding: '16px',
      }}>
        <h3>Need to use the full story variant</h3>

        <p>e.g. to embed ns-accordion from <code>https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-accordion--singular</code> you need to use <code>ns-accordion--singular</code> not just the component name <code>ns-accordion</code></p>

        <p>This prevents storybook redirecting from <code>/ns-accordion</code> to <code>/ns-accordion--singular</code></p>

      </div>
    )
  }

  return (
    <div style={{
      borderLeft: '16px solid red',
      backgroundColor: '#fdedea',
      padding: '16px',
    }}>
      <h3>You've only gone and bloody broken it</h3>

      <p>Reach out to the Nucleus team for help</p>

    </div>
  )
};
