import React from 'react';

export const ComponentPlacement = ({...props}) => {
  const component = props.component;
  const parents = props.parents !== undefined ? props.parents.split(',') : [];
  const componentLinks = parents.map((parent) =>
    <li><a href={`/docs/components/${parent}`}>{parent}</a></li>
  );

  if (parents.length === 0) {
    return (
      <p>The {component} component can only be used as a child of the <code>&lt;main&gt;</code> element</p>
    )
  }

  if (parents.length === 1) {
    return (
      <p>The {component} component can only be used in the <a href={`/docs/components/${parents[0]}`}>{parents[0]}</a> component.</p>
    )
  }

  return (
    <>
      <p>The {component} component can be used in the following components:</p>
      <ul>{componentLinks}</ul>
    </>
  );
};
